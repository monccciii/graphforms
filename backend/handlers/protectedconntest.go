package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/db"
)

func ProtectedConnectionTest(c *gin.Context) {
	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer client.Disconnect(ctx)
	defer cancel()
	c.JSON(http.StatusOK, gin.H{"message": "successful!"})
}