import fetcher from '@/helpers/fetcher'
import { MasterProduct } from '@/interfaces/master-product'
import TableProduct from './table'
import AddProduct from './add-detail'

export default async function MasterProductPage() {
  const res = await fetcher<MasterProduct[]>({
    method: 'GET',
    url: '/master-product',
  })

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Product</h2>
      <AddProduct />
      <div className="overflow-x-auto">
        <TableProduct data={res.data} />
      </div>
    </>
  )
}
