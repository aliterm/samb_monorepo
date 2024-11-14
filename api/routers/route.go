package routers

import (
	"samb-api/handlers"

	"github.com/labstack/echo/v4"
)

func RegisterRoute(e *echo.Echo) {
	e.GET("/ping", handlers.Ping)

	e.GET("/master-customer", handlers.GetMasterCustomer)

	e.GET("/master-product", handlers.GetMasterProduct)
	e.POST("/master-product", handlers.SetMasterProduct)
}
