package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPengeluaranBarangHeader(c echo.Context) error {

	var pengeluaranBarangHeader []models.TransaksiPengeluaranBarangHeader
	result := config.DB.Find(&pengeluaranBarangHeader)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusOK, pengeluaranBarangHeader)
}

func SetTransaksiPengeluaranBarangHeader(c echo.Context) error {

	pengeluaranBarangHeader := new(models.TransaksiPengeluaranBarangHeader)
	if err := c.Bind(pengeluaranBarangHeader); err != nil {
		c.Logger().Error(err)
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&pengeluaranBarangHeader)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, pengeluaranBarangHeader)
}
