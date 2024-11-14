package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetMasterWarehouse(c echo.Context) error {

	var warehouses []models.MasterWarehouse

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

	// Retrieve total count of Master Warehouse
	var total int64
	config.DB.Model(&models.MasterProduct{}).Count(&total)

	if err := config.DB.Limit(pageSize).Offset(offset).Find(&warehouses).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": "Failed to retrieve master warehouse",
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"data": warehouses,
		"pagination": map[string]interface{}{
			"page":     page,
			"pageSize": pageSize,
			"total":    total,
		},
	})
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
