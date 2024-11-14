package models

type TransaksiPenerimaanBarangDetail struct {
	TrxInDPK         uint `json:"trx_in_dpk" gorm:"primaryKey;autoIncrement"`
	TrxInIDF         uint `json:"trx_in_idf"`
	TrxInDProductIdf uint `json:"trx_in_d_product_idf"`
	TrxInDQtyDus     uint `json:"trx_in_d_qty_dus"`
	TrxInDQtyPcs     uint `json:"trx_in_d_qty_pcs"`
}
