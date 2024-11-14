'use client'

import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

export default function AddPenerimaanBarang() {
  const [openModal, setOpenModal] = useState(true)
  const [email, setEmail] = useState('')

  function onCloseModal() {
    setOpenModal(false)
    setEmail('')
  }
  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Tambah
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <p>Tambah</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
