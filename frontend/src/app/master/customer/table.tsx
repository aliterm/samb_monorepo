'use client'

import { MasterCustomer } from '@/interfaces/master-customer'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TableCustomerProps extends ComponentProps<'div'> {
  data?: MasterCustomer[]
}
export default function TableCustomer({ data }: TableCustomerProps) {
  return (
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
              {customer.customer_pk}
            </Table.Cell>
            <Table.Cell>{customer.customer_name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
