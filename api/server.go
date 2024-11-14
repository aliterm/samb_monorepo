package main

import (
	"samb-api/routers"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	routers.RegisterRoute(e)
	e.Logger.Fatal(e.Start(":3030"))
}
