package models

type MasterProduct struct {
	ProductPK   uint   `json:"product_pk" gorm:"primaryKey"`
	ProductName string `json:"product_name"`
}
