package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)


type Form struct {
    ID string `json:"id"`
    Creator string `json:"creator"`
    Questions []Question `json:"questions"`
}

type Question struct {
    Text string `json:"text"`
}



func createForm(c *gin.Context) {
    // Parse the request body into a Form struct
    var form Form
    if err := json.NewDecoder(c.Request.Body).Decode(&form); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    // Generate a unique ID for the form
    form.ID = uuid.New().String()
    // Print out the form data
    fmt.Println("Form Data:")
    fmt.Printf("ID: %s\n", form.ID)
    fmt.Printf("Username: %s\n", form.Creator)
    for i, question := range form.Questions {
        fmt.Printf("Question %d: %s\n", i + 1, question)
    }
    // Process the form data, for example by storing it in a database
    // ...
    // Return a response to the client indicating success
    c.JSON(http.StatusOK, gin.H{"success": "form processed"})
}



func main() {
    router := gin.Default()
    router.GET("/albums", getAlbums)
	router.GET("/albums2", getAlbums2)
	router.POST("/createForm", createForm)

    router.Run("localhost:8080")
}