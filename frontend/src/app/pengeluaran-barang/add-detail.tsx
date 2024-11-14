'use client'

import fetcher from '@/helpers/fetcher'
import { PengeluaranBarangDetail } from '@/interfaces/pengeluaran-barang-detail'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddPengeluaranBarangDetail() {
  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()
  function onCloseModal() {
    setOpenModal(false)
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PengeluaranBarangDetail>()

  const onSubmit: SubmitHandler<PengeluaranBarangDetail> = async (data) => {
    const res = await fetcher<PengeluaranBarangDetail>({
      method: 'POST',
      url: '/add-pengeluaran-barang-detail',
      body: JSON.stringify({
        trx_out_idf: Number(data.trx_out_idf),
        trx_out_d_product_idf: Number(data.trx_out_d_product_idf),
        trx_out_d_qty_dus: Number(data.trx_out_d_qty_dus),
        trx_out_d_qty_pcs: Number(data.trx_out_d_qty_pcs),
      }),
    })

    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Tambah Detail Barang</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_idf" value="ID Pengeluaran Barang" />
              </div>
              <TextInput id="trx_out_idf" placeholder="ID Pengeluaran Barang" {...register('trx_out_idf')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_d_product_idf" value="ID Produk" />
              </div>
              <TextInput
                id="trx_out_d_product_idf"
                type="number"
                placeholder="Produk"
                {...register('trx_out_d_product_idf')}
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_d_qty_dus" value="Jumlah Dus" />
              </div>
              <TextInput
                id="trx_out_d_qty_dus"
                type="number"
                placeholder="Jumlah Dus"
                {...register('trx_out_d_qty_dus')}
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_d_qty_pcs" value="Jumlah Pcs" />
              </div>
              <TextInput
                id="trx_out_d_qty_pcs"
                type="number"
                placeholder="Jumlah Pcs"
                {...register('trx_out_d_qty_pcs')}
              />
            </div>
            <Button type="submit">Simpan</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
