'use client'

import fetcher from '@/helpers/fetcher'
import { MasterSupplier } from '@/interfaces/master-supplier'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddSupplier() {
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
  } = useForm<MasterSupplier>()

  const onSubmit: SubmitHandler<MasterSupplier> = async (data) => {
    const res = await fetcher<MasterSupplier>({
      method: 'POST',
      url: '/master-supplier',
      body: JSON.stringify({
        supplier_name: data.supplier_name,
      }),
    })

    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="my-5">
        Tambah Supplier
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="supplier_name" value="Supplier Name" />
              </div>
              <TextInput id="supplier_name" type="text" {...register('supplier_name')} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
