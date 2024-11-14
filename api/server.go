package main

import (
	"os"
	"samb-api/config"
	"samb-api/routers"

	_ "github.com/joho/godotenv/autoload"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")

	e := echo.New()
	// Enable CORS for all origins
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	routers.RegisterRoute(e)
	config.ConnectDB()
	config.AutoMigration()

	e.Logger.Fatal(e.Start(host + ":" + port))
}
