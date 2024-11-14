package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetMasterCustomer(c echo.Context) error {

	var customers []models.MasterCustomer
	result := config.DB.Find(&customers)

	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}

	return c.JSON(http.StatusOK, result)
}
