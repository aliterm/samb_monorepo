package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPenerimaanBarangDetail(c echo.Context) error {

	var penerimaanBarangDetail []models.TransaksiPenerimaanBarangDetail
	result := config.DB.Find(&penerimaanBarangDetail)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusOK, penerimaanBarangDetail)
}

func SetTransaksiPenerimaanBarangDetail(c echo.Context) error {

	penerimaanBarangDetail := new(models.TransaksiPenerimaanBarangDetail)
	if err := c.Bind(penerimaanBarangDetail); err != nil {
		c.Logger().Error(err)
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&penerimaanBarangDetail)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, penerimaanBarangDetail)
}
