package models

type MasterCustomer struct {
	CustomerPK   uint   `json:"customer_pk" gorm:"primaryKey"`
	CustomerName string `json:"customer_name"`
}
