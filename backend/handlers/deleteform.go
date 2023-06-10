package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"go.mongodb.org/mongo-driver/bson"
)

func DeleteForm(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	type deleteFormRequest struct {
		ID string `json:"id"`
	}

	var req deleteFormRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	res, err := client.Database("graphforms").Collection("forms").DeleteOne(ctx, bson.D{{"id", req.ID}})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if res.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "No form found with the provided ID"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Form deleted successfully"})
}
