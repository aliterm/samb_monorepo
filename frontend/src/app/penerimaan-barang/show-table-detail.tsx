import fetcher from '@/helpers/fetcher'
import TablePenerimaanDetail from './table'
import { PenerimaanBarangDetailResponse } from '@/interfaces/penerimaan-barang-detail'

export default async function ShowTableDetail() {
  const res = await fetcher<PenerimaanBarangDetailResponse[]>({
    method: 'GET',
    url: '/transaksi-penerimaan-barang-detail',
  })

  return <TablePenerimaanDetail data={res.data} />
}
