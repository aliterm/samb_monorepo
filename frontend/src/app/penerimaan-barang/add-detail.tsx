'use client'

import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

export default function AddPenerimaanBarangDetail() {
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')

  function onCloseModal() {
    setOpenModal(false)
    setEmail('')
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Tambah Detail Barang</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <p>Tambah</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
