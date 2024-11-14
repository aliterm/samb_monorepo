package models

import (
	"time"
)

type TransaksiPengeluaranBarangHeader struct {
	TrxOutPK      uint            `json:"trx_out_pk" gorm:"primaryKey:autoIncrement"`
	TrxOutNo      string          `json:"trx_out_no"`
	WhsIdf        uint            `json:"whs_idf"`
	Warehose      MasterWarehouse `json:"warehouse" gorm:"foreignKey:WhsIdf;references:WhsPK"`
	TrxOutDate    time.Time       `json:"trx_out_date" gorm:"type:date;"`
	TrxOutSuppIdf uint            `json:"trx_out_supp_idf"`
	Supplier      MasterSupplier  `json:"supplier" gorm:"foreignKey:TrxOutSuppIdf;references:SupplierPK"`
	TrxOutNotes   string          `json:"trx_out_notes" gorm:"type:varchar(255)"`
}
