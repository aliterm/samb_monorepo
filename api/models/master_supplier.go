package models

type MasterSupplier struct {
	SupplierPK   uint    `json:"supplier_pk" gorm:"primaryKey;autoIncrement"`
	SupplierName *string `json:"supplier_name" gorm:"type:varchar(100);not null" validate:"required"`
}
