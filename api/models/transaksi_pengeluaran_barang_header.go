package models

type TransaksiPengeluaranBarangHeader struct {
	TrxOutPK      uint       `json:"trx_out_pk" gorm:"primaryKey:autoIncrement"`
	TrxOutNo      string     `json:"trx_out_no"`
	WhsIdf        uint       `json:"whs_idf"`
	TrxOutDate    CustomDate `json:"trx_out_date" gorm:"type:date;"`
	TrxOutSuppIdf uint       `json:"trx_out_supp_idf"`
	TrxOutNotes   string     `json:"trx_out_notes" gorm:"type:varchar(255)"`

	// Warehose      MasterWarehouse `json:"warehouse" gorm:"foreignKey:WhsIdf;references:WhsPK"`
	// Supplier      MasterSupplier  `json:"supplier" gorm:"foreignKey:TrxOutSuppIdf;references:SupplierPK"`
}
