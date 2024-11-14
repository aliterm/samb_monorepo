import fetcher from '@/helpers/fetcher'
import { MasterCustomer } from '@/interfaces/master-customer'
import TableCustomer from './table'
import AddCustomer from './add-detail'

export default async function MasterCustomerPage() {
  const res = await fetcher<MasterCustomer[]>({
    method: 'GET',
    url: '/master-customer',
  })

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Customer</h2>
      <AddCustomer />
      <div className="overflow-x-auto">
        <TableCustomer data={res.data} />
      </div>
    </>
  )
}
