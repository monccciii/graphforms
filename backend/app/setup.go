package app

import (
	"os"

	"github.com/gin-contrib/cors"
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

	app.Use(cors.New(cors.Config{AllowOrigins:[]string{os.Getenv("FRONTEND_URI")}}))

	router.SetupRoutes(app)
	app.Run("0.0.0.0:80")
	return nil
}