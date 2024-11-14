'use client'
import { Tabs } from 'flowbite-react'
import { MdFormatListBulletedAdd, MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { BsBoxes, BsDatabaseCheck } from 'react-icons/bs'

import PenerimaanBarang from './penerimaan'
import PengeluaranBarang from './pengeluaran'
import Stock from './stock'
import Master from './master'

export default function NavbarTab() {
  return (
    <Tabs aria-label="Default tabs" variant="underline">
      <Tabs.Item active title="Master" icon={BsDatabaseCheck}>
        <Master />
      </Tabs.Item>
      <Tabs.Item title="Penerimaan" icon={MdFormatListBulletedAdd}>
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
