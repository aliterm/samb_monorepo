package models

import "time"

type TransaksiPenerimaanBarangHeader struct {
	TrxInPK      uint      `json:"trx_in_pk" gorm:"primaryKey"`
	TrxInNo      string    `json:"trx_in_no"`
	WhsIdf       uint      `json:"whs_idf"`
	TrxInDate    time.Time `json:"trx_in_date" gorm:"type:date;"`
	TrxInSuppIdf uint      `json:"trx_in_supp_idf"`
	TrxInNotes   string    `json:"trx_in_notes"`
}
