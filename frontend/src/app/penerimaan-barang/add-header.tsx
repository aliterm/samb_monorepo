'use client'

import fetcher from '@/helpers/fetcher'
import { PenerimaanBarangHeader } from '@/interfaces/penerimaan-barang-header'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { url } from 'inspector'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddPenerimaanBarangHeader() {
  const [openModal, setOpenModal] = useState(false)

  function onCloseModal() {
    setOpenModal(false)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PenerimaanBarangHeader>()

  const onSubmit: SubmitHandler<PenerimaanBarangHeader> = async (data) => {
    const res = await fetcher<PenerimaanBarangHeader>({
      method: 'POST',
      url: '/add-penerimaan-barang-header',
      body: JSON.stringify({
        trx_in_no: data.trx_in_no,
        whs_idf: Number(data.whs_idf),
        trx_in_date: data.trx_in_date,
        trx_in_supp_idf: Number(data.trx_in_supp_idf),
        trx_in_notes: data.trx_in_notes,
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="trx_in_no" value="Nomor Transaksi" />
              </div>
              <TextInput id="trx_in_no" {...register('trx_in_no', { required: true })} />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="whs_idf" value="Gudang" />
              </div>
              <TextInput id="whs_idf" {...register('whs_idf', { required: true })} type="number" />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="trx_in_date" value="Tanggal Transaksi" />
              </div>
              <TextInput id="trx_in_date" {...register('trx_in_date', { required: true })} type="date" />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="trx_in_supp_idf" value="Supplier" />
              </div>
              <TextInput id="trx_in_supp_idf" {...register('trx_in_supp_idf', { required: true })} type="number" />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="trx_in_notes" value="Catatan" />
              </div>
              <TextInput id="trx_in_notes" {...register('trx_in_notes')} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
