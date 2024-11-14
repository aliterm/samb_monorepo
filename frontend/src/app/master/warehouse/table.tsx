'use client'

import { MasterWarehouse } from '@/interfaces/master-warehouse'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TableWarehouseProps extends ComponentProps<'div'> {
  data?: MasterWarehouse[]
}
export default function TableWarehouse({ data }: TableWarehouseProps) {
  return (
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
  )
}
