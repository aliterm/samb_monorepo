import fetcher from '@/helpers/fetcher'
import TablePengeluaranDetail from './table'
import { PengeluaranBarangDetailResponse } from '@/interfaces/pengeluaran-barang-detail'

export default async function ShowTableDetail() {
  const res = await fetcher<PengeluaranBarangDetailResponse[]>({
    method: 'GET',
    url: '/transaksi-pengeluaran-barang-detail',
  })

  console.log(res)
  return <TablePengeluaranDetail data={res.data} />
}
