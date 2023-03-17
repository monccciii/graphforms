package handlers

import (
	"context"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func LoginUser(c *gin.Context) {
	// Connect to the database
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	// Bind request body to LoginDetails struct
	var loginDetails models.LoginDetails
	if err := c.ShouldBindJSON(&loginDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Retrieve user with given username from the database
	var user models.User
	if err := client.Database("graphforms").Collection("users").FindOne(context.TODO(), bson.D{{"username", loginDetails.Username}}).Decode(&user); err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Username not found"})
		return
	}

	// Hash the input password with the retrieved salt and compare with the hashed password in the database
	hashedPassword := hashPassword(loginDetails.Password, user.Salt)

	if hashedPassword != user.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect username or password"})
		return
	}

	// If the credentials are valid, generate a JWT token
	token, err := generateToken(uuid.New().String(), loginDetails.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	// Return the JWT token to the client
	c.JSON(http.StatusOK, gin.H{"token": token})
}

func generateToken(id string, user string) (string, error) {
	secretKey := []byte(os.Getenv("JWT_SECRET_KEY"))

	// Create a new token object, specifying the signing method and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"uuid": id,
		"user": user,
		"exp":  time.Now().Add(time.Hour * 24).Unix(),
	})

	// Sign the token with the secret key
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
