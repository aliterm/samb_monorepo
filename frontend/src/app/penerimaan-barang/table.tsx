'use client'

import { PenerimaanBarangDetailResponse } from '@/interfaces/penerimaan-barang-detail'
import { Table } from 'flowbite-react'
import { ComponentProps } from 'react'
import dayjs from 'dayjs'

interface TablePenerimaanProps extends ComponentProps<'div'> {
  data?: PenerimaanBarangDetailResponse[]
}
export default function TablePenerimaanDetail({ data }: TablePenerimaanProps) {
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
        {data?.map((penerimaan, key) => (
          <Table.Row key={`customer-${key}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {penerimaan.trx_in_dpk}
            </Table.Cell>
            <Table.Cell>{penerimaan.warehouse_name}</Table.Cell>
            <Table.Cell>{penerimaan.supplier_name}</Table.Cell>
            <Table.Cell>{penerimaan.product_name}</Table.Cell>
            <Table.Cell>{penerimaan.trx_in_d_qty_dus}</Table.Cell>
            <Table.Cell>{penerimaan.trx_in_d_qty_pcs}</Table.Cell>
            <Table.Cell>{dayjs(penerimaan.header_date).format('DD-MM-YYYY')}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
