'use client'

import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

export default function AddPengeluaranBarangHeader() {
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')

  function onCloseModal() {
    setOpenModal(false)
    setEmail('')
  }
  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Tambah Header
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
