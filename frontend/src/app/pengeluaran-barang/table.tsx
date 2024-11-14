'use client'

import { PengeluaranBarangDetail } from '@/interfaces/pengeluaran-barang-detail'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TablePengeluaranProps extends ComponentProps<'div'> {
  data?: PengeluaranBarangDetail[]
}
export default function TablePengeluaranDetail({ data }: TablePengeluaranProps) {
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
        {data?.map((Pengeluaran, key) => (
          <Table.Row key={`customer-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {Pengeluaran.trx_out_dpk}
            </Table.Cell>
            <Table.Cell>{Pengeluaran.trx_out_idf}</Table.Cell>
            <Table.Cell>{Pengeluaran.trx_out_d_product_idf}</Table.Cell>
            <Table.Cell>{Pengeluaran.trx_out_d_qty_dus}</Table.Cell>
            <Table.Cell>{Pengeluaran.trx_out_d_qty_pcs}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
