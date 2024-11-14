'use client'

import fetcher from '@/helpers/fetcher'
import { MasterProduct } from '@/interfaces/master-product'
import { Table } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MasterProductComponent() {
  const [data, setData] = useState<MasterProduct[] | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await fetcher<MasterProduct[]>({
        method: 'GET',
        url: '/master-product',
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
      <h2 className="text-2xl font-bold my-5">Master Product</h2>
      <div className="overflow-x-auto">
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
      </div>
    </>
  )
}
