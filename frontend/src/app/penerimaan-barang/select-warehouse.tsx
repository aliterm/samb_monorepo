'use client'
import fetcher from '@/helpers/fetcher'
import { MasterWarehouse } from '@/interfaces/master-warehouse'
import { Label, Select } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function SelectWarehouse() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<MasterWarehouse[] | undefined>()

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
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="warehouses" value="Pilih Gudang" />
      </div>
      <Select id="warehouses" required>
        {data?.map((warehouse) => (
          <option key={warehouse.whs_pk} value={warehouse.whs_name}>
            {warehouse.whs_name}
          </option>
        ))}
      </Select>
    </div>
  )
}
