'use client'

import { Sidebar } from 'flowbite-react'
import { BsBoxes } from 'react-icons/bs'
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'
import { MdFormatListBulletedAdd, MdOutlineShoppingCartCheckout } from 'react-icons/md'

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiChartPie} label="Master Data">
            <Sidebar.Item href="/master/product">Products</Sidebar.Item>
            <Sidebar.Item href="/master/supplier">Supplier</Sidebar.Item>
            <Sidebar.Item href="/master/warehouse">Warehouse</Sidebar.Item>
            <Sidebar.Item href="/master/customer">Customer</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={MdFormatListBulletedAdd}>
            Penerimaan Barang
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdOutlineShoppingCartCheckout}>
            Pengeluaran Barang
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BsBoxes}>
            Stock
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}