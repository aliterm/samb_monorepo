'use client'

import { PengeluaranBarangDetailResponse } from '@/interfaces/pengeluaran-barang-detail'
import dayjs from 'dayjs'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'

interface TablePengeluaranProps extends ComponentProps<'div'> {
  data?: PengeluaranBarangDetailResponse[]
}
export default function TablePengeluaranDetail({ data }: TablePengeluaranProps) {
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Warehouse</Table.HeadCell>
        <Table.HeadCell>Supplier</Table.HeadCell>
        <Table.HeadCell>Product</Table.HeadCell>
        <Table.HeadCell>Jumlah Dus</Table.HeadCell>
        <Table.HeadCell>Jumlah PCS</Table.HeadCell>
        <Table.HeadCell>Tanggal</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data?.map((pengeluaran, key) => (
          <Table.Row key={`customer-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {pengeluaran.trx_out_no}
            </Table.Cell>
            <Table.Cell>{pengeluaran.warehouse_name}</Table.Cell>
            <Table.Cell>{pengeluaran.supplier_name}</Table.Cell>
            <Table.Cell>{pengeluaran.product_name}</Table.Cell>
            <Table.Cell>{pengeluaran.trx_out_d_qty_dus}</Table.Cell>
            <Table.Cell>{pengeluaran.trx_out_d_qty_pcs}</Table.Cell>
            <Table.Cell>{dayjs(pengeluaran.header_date).format('DD-MM-YYYY')}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
