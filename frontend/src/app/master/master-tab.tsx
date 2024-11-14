'use client'

import { Tabs } from 'flowbite-react'
import { MdDashboard } from 'react-icons/md'

import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'

import MasterProductComponent from './product/page'
import MasterSupplierComponent from './supplier/page'
import MasterWarehouseComponent from './warehouse/page'
import MasterCustomerComponent from './customer/page'

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
        <MasterCustomerComponent />
      </Tabs.Item>
    </Tabs>
  )
}
