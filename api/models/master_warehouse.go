package models

type MasterWarehouse struct {
	WhsPK   uint    `json:"whs_pk" gorm:"primaryKey;autoIncrement"`
	WhsName *string `json:"whs_name" gorm:"type:varchar(100);not null" validate:"required"`
}
