'use client'

import { Tabs } from 'flowbite-react'
import { MdDashboard } from 'react-icons/md'

import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'

import MasterProductComponent from './master-product'

export default function MasterTab() {
  return (
    <Tabs aria-label="Tabs with underline" variant="default">
      <Tabs.Item active title="Product" icon={HiUserCircle}>
        <MasterProductComponent />
      </Tabs.Item>
      <Tabs.Item title="Supplier" icon={MdDashboard}>
        <p>Ini Supplier</p>
      </Tabs.Item>
      <Tabs.Item title="Warehouse" icon={HiAdjustments}>
        <p>Ini Warehouse</p>
      </Tabs.Item>
      <Tabs.Item title="Customer" icon={HiClipboardList}>
        <p>Ini Customer</p>
      </Tabs.Item>
    </Tabs>
  )
}
