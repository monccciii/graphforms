package router

import (
	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/handlers"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/", handlers.Landing)
	router.GET("/conntest", handlers.ConnectionTest)
	router.GET("/protectedconntest", handlers.ProtectedConnectionTest)
	router.POST("/viewform", handlers.ViewForm)
	router.POST("/createform", handlers.CreateForm)
	router.POST("/register", handlers.RegisterUser)
	router.POST("/login", handlers.LoginUser)
	router.POST("/submitform", handlers.SubmitForm)
	router.POST("/getresponses", handlers.GetResponses)
	router.POST("/createcsv", handlers.CreateCsv)
	router.POST("/yourforms", handlers.YourForms)
	router.POST("/deleteform", handlers.DeleteForm)
	router.POST("/visualize", handlers.VisualizeSelection)
}