'use client'

import { PenerimaanBarangDetail } from '@/interfaces/penerimaan-barang-detail'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TablePenerimaanProps extends ComponentProps<'div'> {
  data?: PenerimaanBarangDetail[]
}
export default function TablePenerimaanDetail({ data }: TablePenerimaanProps) {
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Header ID</Table.HeadCell>
        <Table.HeadCell>Product ID</Table.HeadCell>
        <Table.HeadCell>Satuan Dus</Table.HeadCell>
        <Table.HeadCell>Satuan PCS</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data?.map((penerimaan, key) => (
          <Table.Row key={`customer-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {penerimaan.trx_in_dpk}
            </Table.Cell>
            <Table.Cell>{penerimaan.trx_in_idf}</Table.Cell>
            <Table.Cell>{penerimaan.trx_in_d_product_idf}</Table.Cell>
            <Table.Cell>{penerimaan.trx_in_d_qty_dus}</Table.Cell>
            <Table.Cell>{penerimaan.trx_in_d_qty_pcs}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
