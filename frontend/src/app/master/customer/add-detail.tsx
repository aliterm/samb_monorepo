'use client'

import fetcher from '@/helpers/fetcher'
import { MasterCustomer } from '@/interfaces/master-customer'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddCustomer() {
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
  } = useForm<MasterCustomer>()

  const onSubmit: SubmitHandler<MasterCustomer> = async (data) => {
    const res = await fetcher<MasterCustomer>({
      method: 'POST',
      url: '/master-customer',
      body: JSON.stringify({
        customer_name: data.customer_name,
      }),
    })

    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="my-5">
        Tambah Customer
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_name" value="Customer Name" />
              </div>
              <TextInput id="customer_name" type="text" {...register('customer_name')} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
