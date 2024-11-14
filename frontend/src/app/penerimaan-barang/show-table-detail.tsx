import fetcher from '@/helpers/fetcher'
import TablePenerimaanDetail from './table'
import { PenerimaanBarangDetail } from '@/interfaces/penerimaan-barang-detail'

export default async function ShowTableDetail() {
  const res = await fetcher<PenerimaanBarangDetail[]>({
    method: 'GET',
    url: '/transaksi-penerimaan-barang-detail',
  })

  return <TablePenerimaanDetail data={res.data} />
}
