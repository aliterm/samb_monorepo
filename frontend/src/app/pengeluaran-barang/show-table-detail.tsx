import fetcher from '@/helpers/fetcher'
import TablePengeluaranDetail from './table'
import { PengeluaranBarangDetail } from '@/interfaces/pengeluaran-barang-detail'

export default async function ShowTableDetail() {
  const res = await fetcher<PengeluaranBarangDetail[]>({
    method: 'GET',
    url: '/transaksi-pengeluaran-barang-detail',
  })

  console.log(res)
  return <TablePengeluaranDetail data={res.data} />
}
