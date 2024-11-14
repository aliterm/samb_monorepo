package routers

import (
	"samb-api/handlers"

	"github.com/labstack/echo/v4"
)

func RegisterRoute(e *echo.Echo) {
	e.GET("/ping", handlers.Ping)

	e.GET("/master-customer", handlers.GetMasterCustomer)
	e.POST("/master-customer", handlers.SetMasterCustomer)

	e.GET("/master-product", handlers.GetMasterProduct)
	e.POST("/master-product", handlers.SetMasterProduct)

	e.GET("/master-supplier", handlers.GetMasterSupplier)
	e.POST("/master-supplier", handlers.SetMasterSupplier)

	e.GET("/master-warehouse", handlers.GetMasterWarehouse)
	e.POST("/master-warehouse", handlers.SetMasterWarehouse)

	e.GET("/transaksi-penerimaan-barang-header", handlers.GetTransaksiPenerimaanBarangHeader)
	e.POST("/add-penerimaan-barang-header", handlers.SetTransaksiPenerimaanBarangHeader)

	e.GET("/transaksi-penerimaan-barang-detail", handlers.GetTransaksiPenerimaanBarangDetail)
	e.POST("/add-penerimaan-barang-detail", handlers.SetTransaksiPenerimaanBarangDetail)

	e.GET("/transaksi-pengeluaran-barang-header", handlers.GetTransaksiPengeluaranBarangHeader)
	e.POST("/add-pengeluaran-barang-header", handlers.SetTransaksiPengeluaranBarangHeader)

	e.GET("/transaksi-pengeluaran-barang-detail", handlers.GetTransaksiPengeluaranBarangDetail)
	e.POST("/add-pengeluaran-barang-detail", handlers.SetTransaksiPengeluaranBarangDetail)
}
