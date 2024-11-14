'use client'

import fetcher from '@/helpers/fetcher'
import { MasterSupplier } from '@/interfaces/master-supplier'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function MasterSupplierComponent() {
  const [data, setData] = useState<MasterSupplier[] | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await fetcher<MasterSupplier[]>({
        method: 'GET',
        url: '/master-supplier',
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
      <h2 className="text-2xl font-bold my-5">Master Supplier</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Supplier ID</Table.HeadCell>
            <Table.HeadCell>Supplier Name</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map((supplier, key) => (
              <Table.Row key={`supplier-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {supplier.supplier_pk}
                </Table.Cell>
                <Table.Cell>{supplier.supplier_name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
