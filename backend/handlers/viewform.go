package handlers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func ViewForm(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
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

	var result models.Form
	if err := client.Database("graphforms").Collection("forms").FindOne(context.TODO(), bson.D{{"id", formIDStr}}).Decode(&result); err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Form not found"})
		return
	}

	c.JSON(http.StatusOK, result)
}
