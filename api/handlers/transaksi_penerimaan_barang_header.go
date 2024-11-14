package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPenerimaanBarangHeader(c echo.Context) error {

	var penerimaanBarangHeader []models.TransaksiPenerimaanBarangHeader
	result := config.DB.Find(&penerimaanBarangHeader)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusOK, penerimaanBarangHeader)

}
func SetTransaksiPenerimaanBarangHeader(c echo.Context) error {

	penerimaanBarangHeader := new(models.TransaksiPenerimaanBarangHeader)
	if err := c.Bind(penerimaanBarangHeader); err != nil {
		c.Logger().Error(err)
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Invalid request body",
		})
	}
	result := config.DB.Create(&penerimaanBarangHeader)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, result.Error)
	}
	return c.JSON(http.StatusCreated, penerimaanBarangHeader)
}
