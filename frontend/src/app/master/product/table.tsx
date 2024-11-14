'use client'

import { MasterProduct } from '@/interfaces/master-product'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TableProductProps extends ComponentProps<'div'> {
  data?: MasterProduct[]
}
export default function TableProduct({ data }: TableProductProps) {
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Product ID</Table.HeadCell>
        <Table.HeadCell>Product Name</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data?.map((product, key) => (
          <Table.Row key={`product-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {product.product_pk}
            </Table.Cell>
            <Table.Cell>{product.product_name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
