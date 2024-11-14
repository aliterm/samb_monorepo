package models

type MasterSupplier struct {
	SupplierPK   uint   `json:"supplier_pk" gorm:"primaryKey"`
	SupplierName string `json:"supplier_name"`
}
