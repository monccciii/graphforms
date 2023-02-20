package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
)

func SubmitForm(c *gin.Context) {
	// Connect to the MongoDB database
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	// Parse the request body into a FormSub struct
	var formSub models.FormSub
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
