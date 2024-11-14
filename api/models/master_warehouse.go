package models

type MasterWarehouse struct {
	WhsPK   uint   `json:"whs_pk" gorm:"primaryKey"`
	WhsName string `json:"whs_name"`
}
