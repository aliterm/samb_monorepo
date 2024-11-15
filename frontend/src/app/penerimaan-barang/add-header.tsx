'use client'

import fetcher from '@/helpers/fetcher'
import { PenerimaanBarangHeader } from '@/interfaces/penerimaan-barang-header'
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'

import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { MasterWarehouse } from '@/interfaces/master-warehouse'
import { useRouter } from 'next/navigation'
import { MasterSupplier } from '@/interfaces/master-supplier'

export default function AddPenerimaanBarangHeader() {
  const [openModal, setOpenModal] = useState(false)

  const [_, setLoading] = useState(false)
  const [warehouses, setWarehouses] = useState<MasterWarehouse[] | undefined>()
  const [suppliers, setSuppliers] = useState<MasterSupplier[] | undefined>()

  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await fetcher<MasterWarehouse[]>({
        method: 'GET',
        url: '/master-warehouse',
      })
      if (res.data) {
        setWarehouses(res.data)
      }

      const res2 = await fetcher<MasterSupplier[]>({
        method: 'GET',
        url: '/master-supplier',
      })

      if (res2.data) {
        setSuppliers(res2.data)
      }

      setLoading(false)
    })()
  }, [openModal])

  function onCloseModal() {
    setOpenModal(false)
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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
    router.refresh()
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

            <div className="max-w-md">
              <TextInput id="whs_idf" {...register('whs_idf', { required: true })} type="hidden" />

              <div className="mb-2 block">
                <Label htmlFor="warehouses" value="Pilih Gudang" />
              </div>
              <Select
                id="warehouses"
                onChange={(evt) => {
                  console.log(evt.currentTarget.value)
                  setValue('whs_idf', Number(evt.currentTarget.value))
                }}
              >
                {warehouses?.map((warehouse) => (
                  <option key={`warehouse-${warehouse.whs_pk}`} value={warehouse.whs_pk}>
                    {warehouse.whs_name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="trx_in_date" value="Tanggal Transaksi" />
              </div>
              <TextInput id="trx_in_date" {...register('trx_in_date', { required: true })} type="date" />
            </div>

            <div>
              <TextInput id="trx_in_supp_idf" {...register('trx_in_supp_idf', { required: true })} type="hidden" />
              <div className="mb-2 block">
                <Label htmlFor="suppliers" value="Pilih Supplier" />
              </div>
              <Select
                id="suppliers"
                onChange={(evt) => {
                  console.log(evt.currentTarget.value)
                  setValue('trx_in_supp_idf', Number(evt.currentTarget.value))
                }}
              >
                {suppliers?.map((supplier) => (
                  <option key={`supplier-${supplier.supplier_pk}`} value={supplier.supplier_pk}>
                    {supplier.supplier_name}
                  </option>
                ))}
              </Select>
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
