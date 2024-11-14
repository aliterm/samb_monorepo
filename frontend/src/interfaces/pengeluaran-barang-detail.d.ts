export interface PengeluaranBarangDetail {
  trx_out_dpk: number
  trx_out_idf: number
  trx_out_d_product_idf: number
  trx_out_d_qty_dus: number
  trx_out_d_qty_pcs: number
}

export interface PengeluaranBarangDetailResponse extends PengeluaranBarangDetail {
  trx_out_no: string
  product_name: string
  supplier_name: string
  warehouse_name: string
  header_date: string
  trx_out_notes: string
}
