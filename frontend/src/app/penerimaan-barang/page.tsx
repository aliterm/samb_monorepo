import AddPenerimaanBarangDetail from './add-detail'
import AddPenerimaanBarangHeader from './add-header'
import ShowTableDetail from './show-table-detail'

export default function PenerimaanBarangPage() {
  return (
    <>
      <h1 className="text-3xl font-bold py-5">Penerimaan Barang</h1>
      <div className="flex gap-x-2 mb-5">
        <AddPenerimaanBarangHeader />
        <AddPenerimaanBarangDetail />
      </div>
      <div>
        <h3>List Penerima Barang</h3>
        <ShowTableDetail />
      </div>
    </>
  )
}
