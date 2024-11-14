package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPenerimaanBarangDetail(c echo.Context) error {

	var penerimaanBarangDetail []models.TransaksiPenerimaanBarangDetail

	// Parse page and pageSize from query parameters
	page, err := strconv.Atoi(c.QueryParam("page"))
	if err != nil || page < 1 {
		page = 1 // Default to page 1
	}

	pageSize, err := strconv.Atoi(c.QueryParam("pageSize"))
	if err != nil || pageSize < 1 {
		pageSize = 10 // Default to 10 items per page
	}

	// Calculate offset
	offset := (page - 1) * pageSize

	// Retrieve total count
	var total int64
	config.DB.Model(&models.TransaksiPenerimaanBarangDetail{}).Count(&total)

	if err := config.DB.Limit(pageSize).Offset(offset).Find(&penerimaanBarangDetail).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": "Failed to retrieve",
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"data": penerimaanBarangDetail,
		"pagination": map[string]interface{}{
			"page":     page,
			"pageSize": pageSize,
			"total":    total,
		},
	})

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
