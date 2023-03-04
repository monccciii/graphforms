package router

import (
	"github.com/gin-gonic/gin"
	"github.com/monccciii/graphforms/handlers"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/", handlers.Landing)
	router.GET("/conntest", handlers.ConnectionTest)
	router.POST("/viewForm", handlers.ViewForm)
	router.POST("/createForm", handlers.CreateForm)
	router.POST("/register", handlers.RegisterUser)
	router.POST("/login", handlers.LoginUser)
	router.POST("/submitForm", handlers.SubmitForm)
	router.POST("/getResponses", handlers.GetResponses)
	router.POST("/createCsv", handlers.CreateCsv)
}