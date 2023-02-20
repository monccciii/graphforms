package app

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/monccciii/graphforms/db"
	"github.com/monccciii/graphforms/router"
)

func SetupApp() error {
	err := godotenv.Load()
	if err != nil {
		return err
	}

	client, ctx, cancel, err := db.ConnectMongo()
	if err != nil {
		return err
	}
	client.Disconnect(ctx)
	cancel()
	
	app := gin.Default()

	app.Use(gin.Recovery())
	app.Use(gin.Logger())

	router.SetupRoutes(app)
	app.Run("0.0.0.0:8080")
	return nil
}