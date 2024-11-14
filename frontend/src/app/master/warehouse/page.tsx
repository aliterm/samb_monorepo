import fetcher from '@/helpers/fetcher'
import TableWarehouse from './table'
import { MasterWarehouse } from '@/interfaces/master-warehouse'
import AddWarehouse from './add-detail'

export default async function MasterWarehousePage() {
  const res = await fetcher<MasterWarehouse[]>({
    method: 'GET',
    url: '/master-warehouse',
  })

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Warehouse</h2>
      <AddWarehouse />
      <div className="overflow-x-auto">
        <TableWarehouse data={res.data} />
      </div>
    </>
  )
}
