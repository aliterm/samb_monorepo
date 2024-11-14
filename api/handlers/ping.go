package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type PingResponse struct {
	Message string `json:"message"`
}

func Ping(c echo.Context) error {
	r := new(PingResponse)
	if err := c.Bind(r); err != nil {
		return err
	}

	r.Message = "pong"
	return c.JSON(http.StatusOK, r)
}
