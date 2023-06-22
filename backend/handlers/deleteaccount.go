package handlers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func DeleteUser(c *gin.Context) {
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
	hashedPassword := HashPassword(loginDetails.Password, user.Salt)

	if hashedPassword != user.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect username or password"})
		return
	}

	// If the credentials are valid, delete the user
	result, err := client.Database("graphforms").Collection("users").DeleteOne(context.TODO(), bson.M{"username": loginDetails.Username})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Check if any user was deleted
	if result.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Delete the user's forms
	_, err = client.Database("graphforms").Collection("forms").DeleteMany(context.TODO(), bson.M{"username": loginDetails.Username})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User and associated forms deleted"})
}
