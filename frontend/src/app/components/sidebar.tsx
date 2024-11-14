'use client'

import { Sidebar } from 'flowbite-react'
import { usePathname } from 'next/navigation'

import { BsBoxes } from 'react-icons/bs'
import { HiChartPie, HiHome } from 'react-icons/hi'
import { MdFormatListBulletedAdd, MdOutlineShoppingCartCheckout } from 'react-icons/md'

export default function SidebarComponent() {
  const pathname = usePathname()
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item active={pathname === '/'} href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Collapse open={pathname.startsWith('/master')} icon={HiChartPie} label="Master Data">
            <Sidebar.Item active={pathname === '/master/product'} href="/master/product">
              Products
            </Sidebar.Item>
            <Sidebar.Item active={pathname === '/master/supplier'} href="/master/supplier">
              Supplier
            </Sidebar.Item>
            <Sidebar.Item active={pathname === '/master/warehouse'} href="/master/warehouse">
              Warehouse
            </Sidebar.Item>
            <Sidebar.Item active={pathname === '/master/customer'} href="/master/customer">
              Customer
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            active={pathname === '/penerimaan-barang'}
            href="/penerimaan-barang"
            icon={MdFormatListBulletedAdd}
          >
            Penerimaan Barang
          </Sidebar.Item>
          <Sidebar.Item
            active={pathname === '/pengeluaran-barang'}
            href="/pengeluaran-barang"
            icon={MdOutlineShoppingCartCheckout}
          >
            Pengeluaran Barang
          </Sidebar.Item>
          <Sidebar.Item active={pathname === '/stock'} href="/stock" icon={BsBoxes}>
            Stock
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
