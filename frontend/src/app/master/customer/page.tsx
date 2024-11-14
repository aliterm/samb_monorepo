import fetcher from '@/helpers/fetcher'
import { MasterCustomer } from '@/interfaces/master-customer'
import TableCustomer from './table'

export default async function MasterCustomerPage() {
  const res = await fetcher<MasterCustomer[]>({
    method: 'GET',
    url: '/master-customer',
  })

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Customer</h2>
      <div className="overflow-x-auto"></div>
      <TableCustomer data={res.data} />
    </>
  )
}
