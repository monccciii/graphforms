package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func YourForms(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	var reqBody struct {
		Username string `json:"username"`
	}
	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Connect to the graphforms database and forms collection
	collection := client.Database("graphforms").Collection("forms")

	// Find all documents with creator equal to the username
	filter := bson.M{"creator": reqBody.Username}
	cursor, err := collection.Find(ctx, filter)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch documents"})
		return
	}

	defer cursor.Close(ctx)

	// Decode the documents into a slice
	var forms []models.Form
	err = cursor.All(ctx, &forms)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to decode documents"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"forms": forms})
}
