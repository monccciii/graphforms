package handlers

import (
	"context"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/models"
	"go.mongodb.org/mongo-driver/bson"
)

//Integrate viewform.go and getresponses.go here
func CreateCsv(c *gin.Context) {
    client, ctx, cancel, err := db.ConnectMongo()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer client.Disconnect(ctx)
    defer cancel()

    //get form
    var reqBody struct {
        ID string `json:"id"`
    }
    if err := json.NewDecoder(c.Request.Body).Decode(&reqBody); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    var form models.Form
    if err := client.Database("graphforms").Collection("forms").FindOne(context.TODO(), bson.M{"id": reqBody.ID}).Decode(&form); err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Form not found"})
        return
    }

    //get responses
    var responses []models.FormSub
    cursor, err := client.Database("graphforms").Collection("formsubmissions").Find(context.Background(), bson.M{"id": reqBody.ID})
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

    //create CSV
   //create CSV
	c.Writer.Header().Set("Content-Type", "text/csv")
	c.Writer.Header().Set("Content-Disposition", fmt.Sprintf("attachment;filename=%s.csv", form.ID))
	csvWriter := csv.NewWriter(c.Writer)

	// write header row if this is the first row being written
	firstRow := true

	// write response rows
	for _, response := range responses {
		var responseRow []string

		// add name to response row
		responseRow = append(responseRow, response.Username)

		// add answers to response row
		for _, question := range form.Questions {
			answer := getAnswer(question.Text, response.Questions)
			responseRow = append(responseRow, answer)
		}

		// write header row if this is the first row being written
		if firstRow {
			var headerRow []string
			headerRow = append(headerRow, "Name")
			for _, question := range form.Questions {
				headerRow = append(headerRow, question.Text)
			}
			csvWriter.Write(headerRow)
			firstRow = false
		}

		// write response row
		csvWriter.Write(responseRow)
	}

	csvWriter.Flush()
}
func getAnswer(q string, qa []models.QuestionAnswer) string {
    for _, a := range qa {
        if a.Question == q {
            return a.Answer
        }
    }
    return ""
}
