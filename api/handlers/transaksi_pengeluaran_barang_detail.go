package handlers

import (
	"net/http"
	"samb-api/config"
	"samb-api/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetTransaksiPengeluaranBarangDetail(c echo.Context) error {

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
	config.DB.Model(&models.TransaksiPengeluaranBarangDetail{}).Count(&total)

	type TransaksiPengeluaranBarangDetail struct {
		TrxOutDPK         uint   `json:"trx_out_dpk"`
		TrxOutIDF         uint   `json:"trx_out_idf"`
		TrxOutDProductIdf uint   `json:"trx_out_d_product_idf"`
		TrxOutDQtyDus     uint   `json:"trx_out_d_qty_dus"`
		TrxOutDQtyPcs     uint   `json:"trx_out_d_qty_pcs"`
		TrxOutNo          string `json:"trx_out_no"`
		ProductName       string `json:"product_name"`
		SupplierName      string `json:"supplier_name"`
		WarehouseName     string `json:"warehouse_name"`
		HeaderDate        string `json:"header_date"`
	}

	var pengeluaranBarangDetail []TransaksiPengeluaranBarangDetail

	err = config.DB.
		Table("transaksi_pengeluaran_barang_details as A").
		Select("A.trx_out_dpk", "A.trx_out_id_f",
			"A.trx_out_d_product_idf",
			"A.trx_out_d_qty_dus", "A.trx_out_d_qty_pcs",
			"B.trx_out_no",
			"C.product_name", "D.supplier_name", "E.whs_name as warehouse_name",
			"B.trx_out_date as header_date",
		).
		Joins("JOIN transaksi_pengeluaran_barang_headers as B ON A.trx_out_id_f = B.trx_out_pk").
		Joins("JOIN master_products as C ON A.trx_out_d_product_idf = C.product_pk").
		Joins("JOIN master_suppliers as D ON B.trx_out_supp_idf = D.supplier_pk").
		Joins("JOIN master_warehouses as E ON B.whs_idf = E.whs_pk").
		Limit(pageSize).
		Offset(offset).
		Scan(&pengeluaranBarangDetail).Error

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": "Failed to retrieve",
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"data": pengeluaranBarangDetail,
		"pagination": map[string]interface{}{
			"page":     page,
			"pageSize": pageSize,
			"total":    total,
		},
	})

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
