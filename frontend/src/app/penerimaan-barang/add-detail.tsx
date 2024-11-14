'use client'

import fetcher from '@/helpers/fetcher'
import { PenerimaanBarangDetail } from '@/interfaces/penerimaan-barang-detail'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddPenerimaanBarangDetail() {
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
  } = useForm<PenerimaanBarangDetail>()

  const onSubmit: SubmitHandler<PenerimaanBarangDetail> = async (data) => {
    const res = await fetcher<PenerimaanBarangDetail>({
      method: 'POST',
      url: '/add-penerimaan-barang-detail',
      body: JSON.stringify({
        trx_in_idf: Number(data.trx_in_idf),
        trx_in_d_product_idf: Number(data.trx_in_d_product_idf),
        trx_in_d_qty_dus: Number(data.trx_in_d_qty_dus),
        trx_in_d_qty_pcs: Number(data.trx_in_d_qty_pcs),
      }),
    })

    setOpenModal(false)
    router.prefetch('/penerimaan-barang')
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
                <Label htmlFor="trx_in_idf" value="Transaksi Header ID" />
              </div>
              <TextInput id="trx_in_idf" type="text" placeholder="trx_in_idf" {...register('trx_in_idf')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_in_d_product_idf" value="Transaksi Product ID" />
              </div>
              <TextInput id="trx_in_d_product_idf" type="number" {...register('trx_in_d_product_idf')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_in_d_qty_dus" value="Satuan Dus" />
              </div>
              <TextInput id="trx_in_d_qty_dus" type="number" {...register('trx_in_d_qty_dus')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_in_d_qty_pcs" value="Satuan PCS" />
              </div>
              <TextInput id="trx_in_d_qty_pcs" type="number" {...register('trx_in_d_qty_pcs')} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
