'use client'

import { Tabs } from 'flowbite-react'
import { MdDashboard } from 'react-icons/md'

import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'

import MasterProductComponent from './master-product'
import MasterSupplierComponent from './master-supplier'
import MasterWarehouseComponent from './master-warehouse'

export default function MasterTab() {
  return (
    <Tabs aria-label="Tabs with underline" variant="default">
      <Tabs.Item active title="Product" icon={HiUserCircle}>
        <MasterProductComponent />
      </Tabs.Item>
      <Tabs.Item title="Supplier" icon={MdDashboard}>
        <MasterSupplierComponent />
      </Tabs.Item>
      <Tabs.Item title="Warehouse" icon={HiAdjustments}>
        <MasterWarehouseComponent />
      </Tabs.Item>
      <Tabs.Item title="Customer" icon={HiClipboardList}>
        <p>Ini Customer</p>
      </Tabs.Item>
    </Tabs>
  )
}
