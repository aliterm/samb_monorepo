package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPenerimaanBarangDetail(c echo.Context) error {
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

	// Define the struct to map the result
	type TransaksiPenerimaanBarangDetail struct {
		TrxInDpk         uint   `json:"trx_in_dpk"`
		TrxInIdF         uint   `json:"trx_in_id_f"`
		TrxInDProductIdf uint   `json:"trx_in_d_product_idf"`
		TrxInDQtyDus     uint   `json:"trx_in_d_qty_dus"`
		TrxInDQtyPcs     uint   `json:"trx_in_d_qty_pcs"`
		TrxInNo          string `json:"trx_in_no"`
		TrxInSuppIdf     uint   `json:"trx_in_supp_idf"`
		HeaderDate       string `json:"header_date"`
		TrxInNotes       string `json:"trx_in_notes"`
		WarehouseName    string `json:"warehouse_name"` // Adjusted field name
		ProductName      string `json:"product_name"`   // Adjusted field name
		SupplierName     string `json:"supplier_name"`
	}

	var penerimaanBarangDetail []TransaksiPenerimaanBarangDetail

	// Retrieve total count
	var total int64
	config.DB.Model(&models.TransaksiPenerimaanBarangDetail{}).Count(&total)

	// Perform the query with explicit field selection
	err = config.DB.
		Table("transaksi_penerimaan_barang_details as A").
		Select(`
			A.trx_in_dpk, A.trx_in_id_f, A.trx_in_d_product_idf, 
			A.trx_in_d_qty_dus, A.trx_in_d_qty_pcs, 
			B.trx_in_no, B.trx_in_supp_idf, B.trx_in_date as header_date, B.trx_in_notes, 
			C.whs_name as warehouse_name, 
			D.product_name as product_name,
			E.supplier_name as supplier_name
		`).
		Joins("INNER JOIN transaksi_penerimaan_barang_headers as B ON B.trx_in_pk = A.trx_in_id_f").
		Joins("INNER JOIN master_warehouses as C ON C.whs_pk = B.whs_idf").
		Joins("INNER JOIN master_products as D ON A.trx_in_d_product_idf = D.product_pk").
		Joins("INNER JOIN master_suppliers as E ON B.trx_in_supp_idf = E.supplier_pk").
		Limit(pageSize).
		Offset(offset).
		Scan(&penerimaanBarangDetail).Error

	c.Logger().Error(err)
	if err != nil {
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
