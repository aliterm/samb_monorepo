'use client'
import { Tabs } from 'flowbite-react'
import { MdFormatListBulletedAdd, MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { BsBoxes } from 'react-icons/bs'
import PenerimaanBarang from './penerimaan'
import PengeluaranBarang from './pengeluaran'
import Stock from './stock'

export default function NavbarTab() {
  return (
    <Tabs aria-label="Default tabs" variant="underline">
      <Tabs.Item active title="Penerimaan" icon={MdFormatListBulletedAdd}>
        <PenerimaanBarang />
      </Tabs.Item>
      <Tabs.Item title="Pengeluaran" icon={MdOutlineShoppingCartCheckout}>
        <PengeluaranBarang />
      </Tabs.Item>
      <Tabs.Item title="Stock" icon={BsBoxes}>
        <Stock />
      </Tabs.Item>
    </Tabs>
  )
}
