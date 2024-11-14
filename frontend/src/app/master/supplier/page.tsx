import fetcher from '@/helpers/fetcher'
import TableProduct from './table'
import { MasterSupplier } from '@/interfaces/master-supplier'

export default async function MasterSupplierPage() {
  const res = await fetcher<MasterSupplier[]>({
    method: 'GET',
    url: '/master-supplier',
  })

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Supplier</h2>
      <div className="overflow-x-auto"></div>
      <TableProduct data={res.data} />
    </>
  )
}
