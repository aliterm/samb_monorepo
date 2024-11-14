'use client'

import fetcher from '@/helpers/fetcher'
import { PengeluaranBarangHeader } from '@/interfaces/pengeluaran-barang-header'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddPengeluaranBarangHeader() {
  const [openModal, setOpenModal] = useState(false)

  function onCloseModal() {
    setOpenModal(false)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PengeluaranBarangHeader>()
  const onSubmit: SubmitHandler<PengeluaranBarangHeader> = async (data) => {
    const res = await fetcher<PengeluaranBarangHeader>({
      method: 'POST',
      url: '/add-pengeluaran-barang-header',
      body: JSON.stringify({
        trx_out_no: data.trx_out_no,
        whs_idf: Number(data.whs_idf),
        trx_out_date: data.trx_out_date,
        trx_out_supp_idf: Number(data.trx_out_supp_idf),
        trx_out_notes: data.trx_out_notes,
      }),
    })

    setOpenModal(false)
  }

  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Tambah Header
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_no" value="No Pengeluaran" />
              </div>
              <TextInput id="trx_out_no" type="text" {...register('trx_out_no')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="whs_idf" value="ID Warehouse" />
              </div>
              <TextInput id="whs_idf" type="number" {...register('whs_idf')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_date" value="Tanggal Pengeluaran" />
              </div>
              <TextInput id="trx_out_date" type="date" {...register('trx_out_date')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_supp_idf" value="ID Supplier" />
              </div>
              <TextInput id="trx_out_supp_idf" type="number" {...register('trx_out_supp_idf')} />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="trx_out_notes" value="Catatan" />
              </div>
              <TextInput id="trx_out_notes" type="text" {...register('trx_out_notes')} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
