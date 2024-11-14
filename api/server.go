package main

import (
	"os"
	"samb-api/config"
	"samb-api/routers"

	_ "github.com/joho/godotenv/autoload"

	"github.com/labstack/echo/v4"
)

func main() {
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")

	e := echo.New()

	routers.RegisterRoute(e)
	config.ConnectDB()
	config.AutoMigration()

	e.Logger.Fatal(e.Start(host + ":" + port))
}
