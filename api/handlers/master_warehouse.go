package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetMasterWarehouse(c echo.Context) error {

	var warehouses []models.MasterWarehouse
	result := config.DB.Find(&warehouses)

	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}

	return c.JSON(http.StatusOK, warehouses)
}

func SetMasterWarehouse(c echo.Context) error {

	warehouse := new(models.MasterWarehouse)
	if err := c.Bind(warehouse); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&warehouse)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, warehouse)
}
