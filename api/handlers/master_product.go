package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetMasterProduct(c echo.Context) error {
	var products []models.MasterProduct
	result := config.DB.Find(&products)

	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}

	return c.JSON(http.StatusOK, products)
}

func SetMasterProduct(c echo.Context) error {

	product := new(models.MasterProduct)
	if err := c.Bind(product); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&product)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, product)

}
