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

    var id struct {
        ID string `json:"id"`
    }
    if err := json.NewDecoder(c.Request.Body).Decode(&id); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    var responses []models.FormSub
    cursor, err := client.Database("graphforms").Collection("formsubmissions").Find(context.TODO(), bson.D{{"id", id.ID}})
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer cursor.Close(context.Background())

    for cursor.Next(context.Background()) {
        var formSub models.FormSub
        if err := cursor.Decode(&formSub); err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        responses = append(responses, formSub)
    }
    if err := cursor.Err(); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, responses)
}
