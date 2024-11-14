'use client'

import fetcher from '@/helpers/fetcher'
import { MasterWarehouse } from '@/interfaces/master-warehouse'

import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function MasterWarehouseComponent() {
  const [data, setData] = useState<MasterWarehouse[] | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await fetcher<MasterWarehouse[]>({
        method: 'GET',
        url: '/master-warehouse',
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
      <h2 className="text-2xl font-bold my-5">Master Warehouse</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Warehouse ID</Table.HeadCell>
            <Table.HeadCell>Warehouse Name</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map((warehouse, key) => (
              <Table.Row key={`warehouse-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {warehouse.whs_pk}
                </Table.Cell>
                <Table.Cell>{warehouse.whs_name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
