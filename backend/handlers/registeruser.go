package handlers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func RegisterUser(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	var newUser models.User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Check if username is already taken
	var existingUser models.User
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
