import AddPenerimaanBarang from './add'

export default function PenerimaanBarangPage() {
  return (
    <>
      <h1 className="text-3xl font-bold py-5">Penerimaan Barang</h1>
      <div className="flex gap-x-2 mb-5">
        <AddPenerimaanBarang />
      </div>
      <div>
        <h3>List Penerima Barang</h3>
      </div>
    </>
  )
}
