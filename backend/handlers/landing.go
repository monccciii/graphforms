package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Landing(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "welcome!"})
}