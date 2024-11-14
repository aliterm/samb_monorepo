package models

type MasterProduct struct {
	ProductPK   uint    `json:"product_pk" gorm:"primaryKey;autoIncrement"`
	ProductName *string `json:"product_name" gorm:"type:varchar(100);not null" validate:"required"`
}
