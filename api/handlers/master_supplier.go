package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetMasterSupplier(c echo.Context) error {
	var suppliers []models.MasterSupplier
	result := config.DB.Find(&suppliers)

	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}

	return c.JSON(http.StatusOK, suppliers)
}

func SetMasterSupplier(c echo.Context) error {

	supplier := new(models.MasterSupplier)
	if err := c.Bind(supplier); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&supplier)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, supplier)

}
