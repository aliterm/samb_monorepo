package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPengeluaranBarangDetail(c echo.Context) error {

	var pengeluaranBarangDetail []models.TransaksiPengeluaranBarangDetail
	result := config.DB.Find(&pengeluaranBarangDetail)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusOK, pengeluaranBarangDetail)
}

func SetTransaksiPengeluaranBarangDetail(c echo.Context) error {

	pengeluaranBarangDetail := new(models.TransaksiPengeluaranBarangDetail)
	if err := c.Bind(pengeluaranBarangDetail); err != nil {
		c.Logger().Error(err)
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&pengeluaranBarangDetail)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, pengeluaranBarangDetail)
}
