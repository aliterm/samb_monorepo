'use client'

import fetcher from '@/helpers/fetcher'
import { MasterProduct } from '@/interfaces/master-product'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function AddProduct() {
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
  } = useForm<MasterProduct>()

  const onSubmit: SubmitHandler<MasterProduct> = async (data) => {
    const res = await fetcher<MasterProduct>({
      method: 'POST',
      url: '/master-product',
      body: JSON.stringify({
        product_name: data.product_name,
      }),
    })

    setOpenModal(false)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="my-5">
        Tambah Product
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="product_name" value="Product Name" />
              </div>
              <TextInput id="product_name" type="text" {...register('product_name')} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
