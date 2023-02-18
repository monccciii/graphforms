package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


type Form struct {
    ID string `json:"id"`
    Creator string `json:"creator"`
    Questions []Question `json:"questions"`
}
type FormSub struct {
    ID string `json:"id" bson:"id"`
    Creator string `json:"creator" bson:"creator"`
    Username string `json:"username" bson:"username"`
    Timestamp time.Time `json:"timestamp" bson:"timestamp"`
    Questions []Question `json:"questions" bson:"questions"`
}

type User struct {
	Username string `bson:"username" json:"username"`
	Password string `bson:"password" json:"password"`
}

type Question struct {
    Text string `json:"text"`
}


func landing(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message":"welcome!"})
}

func connectMongo() (*mongo.Client, context.Context, context.CancelFunc, error) {
	// Load the environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Get the MongoDB URI from the environment variables
	uri := os.Getenv("MONGODB_URI")
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return nil, nil, nil, err
	}

	// Create a context with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	// Connect to the MongoDB database
	err = client.Connect(ctx)
	if err != nil {
		cancel()
		return nil, nil, nil, err
	}

	return client, ctx, cancel, nil
}


func viewForm(c *gin.Context) {
    client, ctx, cancel, err := connectMongo()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer client.Disconnect(ctx)
    defer cancel()

    formIDStr := c.Query("id")
    if formIDStr == "" {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Form id is required"})
        return
    }

    var result Form
    if err := client.Database("graphforms").Collection("forms").FindOne(context.TODO(), bson.D{{"id", formIDStr}}).Decode(&result); err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Form not found"})
        return
    }

    c.JSON(http.StatusOK, result)
}

func createForm(c *gin.Context) {
	// Connect to the MongoDB database
	client, ctx, cancel, err := connectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	// Parse the request body into a Form struct
	var form Form
	if err := json.NewDecoder(c.Request.Body).Decode(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Generate a unique ID for the form
	form.ID = uuid.New().String()

	// Get a handle to the "graphforms" database and "form" collection
	formsCollection := client.Database("graphforms").Collection("forms")

	// Insert the form struct into the "form" collection
	_, err = formsCollection.InsertOne(ctx, form)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return a response to the client indicating success
	c.JSON(http.StatusOK, gin.H{"success": "form created"})
}


func loginUser(c *gin.Context) {
    // Connect to the database
    client, ctx, cancel, err := connectMongo()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer client.Disconnect(ctx)
    defer cancel()

    // Get the username and password from the request body
    var loginDetails struct {
        Username string `json:"username"`
        Password string `json:"password"`
    }
    if err := c.ShouldBindJSON(&loginDetails); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
        return
    }

    // Check if the provided username and password match what's stored in the database
    var user User
    if err := client.Database("graphforms").Collection("users").FindOne(context.TODO(), bson.D{{"username", loginDetails.Username}}).Decode(&user); err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Username not found"})
        return
    }
    if user.Password != loginDetails.Password {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect password"})
        return
    }

    // If the credentials are valid, return a success message
    c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}

func registerUser(c *gin.Context) {
    client, ctx, cancel, err := connectMongo()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer client.Disconnect(ctx)
    defer cancel()

    var newUser User
    if err := c.ShouldBindJSON(&newUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
        return
    }

    // Check if username is already taken
    var existingUser User
    if err := client.Database("graphforms").Collection("users").FindOne(context.TODO(), bson.D{{"username", newUser.Username}}).Decode(&existingUser); err == nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Username already taken"})
        return
    }

    // Insert new user
    _, err = client.Database("graphforms").Collection("users").InsertOne(context.TODO(), newUser)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"message": "User created"})
}


func submitForm(c *gin.Context) {
	// Connect to the MongoDB database
	client, ctx, cancel, err := connectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	// Parse the request body into a FormSub struct
	var formSub FormSub
	if err := json.NewDecoder(c.Request.Body).Decode(&formSub); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get a handle to the "graphforms" database and "formsubmissions" collection
	formsSubmissionsCollection := client.Database("graphforms").Collection("formsubmissions")

	// Insert the FormSub struct into the "formsubmissions" collection
	_, err = formsSubmissionsCollection.InsertOne(ctx, formSub)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return a response to the client indicating success
	c.JSON(http.StatusOK, gin.H{"success": "form submission created"})
}

func getResponses(c *gin.Context) {
    client, ctx, cancel, err := connectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

    var id int
    if err := json.NewDecoder(c.Request.Body).Decode(&id); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

    var responses []FormSub
    if err := client.Database("graphforms").Collection("formsubmissions").FindOne(context.TODO(), bson.D{{"id", id}}).Decode(&responses); err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Submissions not found"})
        return
    }

	c.JSON(http.StatusOK, responses)
}



func main() {
    router := gin.Default()
	router.GET("/", landing)
	router.GET("/viewForm", viewForm)
	router.POST("/createForm", createForm)
	router.POST("/register", registerUser)
	router.POST("/login", loginUser)
    router.POST("/submitForm", submitForm)
    router.POST("/getResponses", getResponses)


    router.Run("0.0.0.0:8080")
}