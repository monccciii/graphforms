package handlers

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
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

	var existingUser models.User
	if err := client.Database("graphforms").Collection("users").FindOne(context.TODO(), bson.D{{"username", newUser.Username}}).Decode(&existingUser); err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Username already taken"})
		return
	}

	salt, err := GenerateSalt()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate salt"})
		return
	}

	hashedPassword := hashPassword(newUser.Password, salt)

	newUser.Password = hashedPassword
	newUser.Salt = salt
	_, err = client.Database("graphforms").Collection("users").InsertOne(context.TODO(), newUser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "User created"})
}

func GenerateSalt() (string, error) {
	salt := make([]byte, 16)
	_, err := rand.Read(salt)
	if err != nil {
		return "", err
	}

	return base64.StdEncoding.EncodeToString(salt), nil
}

func hashPassword(password, salt string) string {
    saltedPassword := []byte(password + salt)
    hash := sha256.Sum256(saltedPassword)
    return base64.StdEncoding.EncodeToString(hash[:])
}

