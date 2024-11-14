package models

type TransaksiPenerimaanBarangDetail struct {
	TrxInDPK         uint                            `json:"trx_in_dpk" gorm:"primaryKey;autoIncrement"`
	TrxInIDF         uint                            `json:"trx_in_idf"`
	Header           TransaksiPenerimaanBarangHeader `json:"header" gorm:"foreignKey:TrxInIDF;references:TrxInPK"`
	TrxInDProductIdf uint                            `json:"trx_in_d_product_idf"`
	Product          MasterProduct                   `json:"product"  gorm:"foreignKey:TrxInDProductIdf;references:ProductPK"`
	TrxInDQtyDus     uint                            `json:"trx_in_d_qty_dus"`
	TrxInDQtyPcs     uint                            `json:"trx_in_d_qty_pcs"`
}