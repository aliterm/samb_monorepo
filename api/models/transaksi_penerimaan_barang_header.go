package models

import (
	"time"
)

type TransaksiPenerimaanBarangHeader struct {
	TrxInPK      uint            `json:"trx_in_pk" gorm:"primaryKey;autoIncrement"`
	TrxInNo      string          `json:"trx_in_no"`
	WhsIdf       uint            `json:"whs_idf"`
	Warehose     MasterWarehouse `json:"warehouse" gorm:"foreignKey:WhsIdf;references:WhsPK"`
	TrxInDate    time.Time       `json:"trx_in_date" gorm:"type:date;"`
	TrxInSuppIdf uint            `json:"trx_in_supp_idf"`
	Supplier     MasterSupplier  `json:"supplier" gorm:"foreignKey:TrxInSuppIdf;references:SupplierPK"`
	TrxInNotes   string          `json:"trx_in_notes" gorm:"type:varchar(255)"`
}
