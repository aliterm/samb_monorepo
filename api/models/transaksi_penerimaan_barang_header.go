package models

type TransaksiPenerimaanBarangHeader struct {
	TrxInPK      uint       `json:"trx_in_pk" gorm:"primaryKey;autoIncrement"`
	TrxInNo      *string    `json:"trx_in_no" gorm:"type:varchar(255)"`
	WhsIdf       uint       `json:"whs_idf"`
	TrxInDate    CustomDate `json:"trx_in_date" gorm:"type:date;"`
	TrxInSuppIdf uint       `json:"trx_in_supp_idf"`
	TrxInNotes   string     `json:"trx_in_notes" gorm:"type:varchar(255)"`
}
