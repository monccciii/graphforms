package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
)

func CreateForm(c *gin.Context) {
	// Connect to the MongoDB database
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	// Parse the request body into a Form struct
	var form models.Form
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