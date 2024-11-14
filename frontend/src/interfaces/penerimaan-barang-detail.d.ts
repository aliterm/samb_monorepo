export interface PenerimaanBarangDetail {
  trx_in_dpk: number
  trx_in_idf: number
  trx_in_d_product_idf: number
  trx_in_d_qty_dus: number
  trx_in_d_qty_pcs: number
}

export interface PenerimaanBarangDetailResponse extends PenerimaanBarangDetail {
  trx_in_dpk: number
  trx_in_id_f: number
  trx_in_d_product_idf: number
  trx_in_d_qty_dus: number
  trx_in_d_qty_pcs: number
  trx_in_no: string
  trx_in_supp_idf: number
  header_date: string
  trx_in_notes: string
  warehouse_name: string
  product_name: string
  supplier_name: string
}
