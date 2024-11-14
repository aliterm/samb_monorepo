'use client'

import { MasterSupplier } from '@/interfaces/master-supplier'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TableSupplierProps extends ComponentProps<'div'> {
  data?: MasterSupplier[]
}
export default function TableSupplier({ data }: TableSupplierProps) {
  return (
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
  )
}
