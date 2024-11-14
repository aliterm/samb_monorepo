package models

type MasterCustomer struct {
	CustomerPK   uint    `json:"customer_pk" gorm:"primaryKey;autoIncrement"`
	CustomerName *string `json:"customer_name" gorm:"type:varchar(100);not null" validate:"required"`
}
