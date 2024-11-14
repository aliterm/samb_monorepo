package models

type TransaksiPengeluaranBarangDetail struct {
	TrxOutDPK         uint                             `json:"trx_out_dpk" gorm:"primaryKey;autoIncrement"`
	TrxOutIDF         uint                             `json:"trx_out_idf"`
	Header            TransaksiPengeluaranBarangHeader `json:"header" gorm:"foreignKey:TrxOutIDF;references:TrxOutPK"`
	TrxOutDProductIdf uint                             `json:"trx_out_d_product_idf"`
	Product           MasterProduct                    `json:"product"  gorm:"foreignKey:TrxOutDProductIdf;references:ProductPK"`
	TrxOutDQtyDus     uint                             `json:"trx_out_d_qty_dus"`
	TrxOutDQtyPcs     uint                             `json:"trx_out_d_qty_pcs"`
}
