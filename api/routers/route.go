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

	e.GET("/transaksi-penerimaan-barang", handlers.GetTransaksiPenerimaanBarang)
}
