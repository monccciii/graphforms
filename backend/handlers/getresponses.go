package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

func GetResponses(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	var id int
	if err := json.NewDecoder(c.Request.Body).Decode(&id); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var responses []models.FormSub
	if err := client.Database("graphforms").Collection("formsubmissions").FindOne(context.TODO(), bson.D{{"id", id}}).Decode(&responses); err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Submissions not found"})
		return
	}

	c.JSON(http.StatusOK, responses)
}
