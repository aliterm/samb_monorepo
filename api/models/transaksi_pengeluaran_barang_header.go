package models

import "time"

type TransaksiPengeluaranBarangHeader struct {
	TrxOutPK      uint      `json:"trx_out_pk" gorm:"primaryKey"`
	TrxOutNo      string    `json:"trx_out_no"`
	WhsIdf        uint      `json:"whs_idf"`
	TrxOutDate    time.Time `json:"trx_out_date" gorm:"type:date;"`
	TrxOutSuppIdf uint      `json:"trx_out_supp_idf"`
	TrxOutNotes   string    `json:"trx_out_notes"`
}
