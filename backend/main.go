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

type Question struct {
    Text string `json:"text"`
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




func main() {
    router := gin.Default()
	router.GET("/viewForm", viewForm)
	router.POST("/createForm", createForm)

    router.Run("localhost:8080")
}