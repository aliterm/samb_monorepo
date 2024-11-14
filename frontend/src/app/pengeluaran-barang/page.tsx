import AddPengeluaranBarangDetail from './add-detail'
import AddPengeluaranBarangHeader from './add-header'
import ShowTableDetail from './show-table-detail'

export default function PengeluaranBarangPage() {
  return (
    <>
      <h1 className="text-3xl font-bold py-5">Pengeluaran Barang</h1>
      <div className="flex gap-x-2 mb-5">
        <AddPengeluaranBarangHeader />
        <AddPengeluaranBarangDetail />
      </div>
      <div>
        <h3>List Pengeluaran Barang</h3>
        <ShowTableDetail />
      </div>
    </>
  )
}
