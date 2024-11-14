'use client'

import fetcher from '@/helpers/fetcher'
import { MasterCustomer } from '@/interfaces/master-customer'

import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function MasterCustomerComponent() {
  const [data, setData] = useState<MasterCustomer[] | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await fetcher<MasterCustomer[]>({
        method: 'GET',
        url: '/master-customer',
      })

      if (res.data) {
        setData(res.data)
      }
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <p>Loading ...</p>
  }

  return (
    <>
      <h2 className="text-2xl font-bold my-5">Master Customer</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Customer ID</Table.HeadCell>
            <Table.HeadCell>Customer Name</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map((customer, key) => (
              <Table.Row key={`customer-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {customer.customer_name}
                </Table.Cell>
                <Table.Cell>{customer.customer_name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
