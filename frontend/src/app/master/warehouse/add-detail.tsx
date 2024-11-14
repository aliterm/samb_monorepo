'use client'

import fetcher from '@/helpers/fetcher'
import { MasterWarehouse } from '@/interfaces/master-warehouse'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddWarehouse() {
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
  } = useForm<MasterWarehouse>()

  const onSubmit: SubmitHandler<MasterWarehouse> = async (data) => {
    const res = await fetcher<MasterWarehouse>({
      method: 'POST',
      url: '/master-warehouse',
      body: JSON.stringify({
        whs_name: data.whs_name,
      }),
    })

    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="my-5">
        Tambah Warehouse
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="whs_name" value="Warehouse Name" />
              </div>
              <TextInput id="whs_name" type="text" {...register('whs_name')} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
