package handlers

import (
	"fmt"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
)

type vissel struct {
	Question string `bson:"question" json:"question"`
	Options  string `bson:"options" json:"options"`
}

func VisualizeSelection(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()

	var question vissel
	if err := c.ShouldBindJSON(&question); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cmd := exec.Command("python", "./scripts/openaitest.py", question.Question, question.Options)
	out, err := cmd.Output()

	if err != nil {
		fmt.Println("Error: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"result": string(out)})
}
