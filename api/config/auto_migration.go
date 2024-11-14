package config

import (
	"fmt"
	"samb-api/models"
)

func AutoMigration() {
	err := DB.AutoMigrate(&models.MasterSupplier{}, &models.MasterWarehouse{}, &models.MasterCustomer{}, &models.MasterProduct{})
	if err != nil {
		panic("Migration failed:" + fmt.Sprint(err))
	}
}
