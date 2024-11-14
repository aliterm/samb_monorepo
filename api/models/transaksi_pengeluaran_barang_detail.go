package models

type TransaksiPengeluaranBarangDetail struct {
	TrxOutDPK         uint `json:"trx_out_dpk" gorm:"primaryKey;autoIncrement"`
	TrxOutIDF         uint `json:"trx_out_idf"`
	TrxOutDProductIdf uint `json:"trx_out_d_product_idf"`
	TrxOutDQtyDus     uint `json:"trx_out_d_qty_dus"`
	TrxOutDQtyPcs     uint `json:"trx_out_d_qty_pcs"`
}
