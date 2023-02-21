package handlers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
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
	var user models.User
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