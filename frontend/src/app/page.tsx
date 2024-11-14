import NavbarTab from './components/navbartab'
import { BsBoxes } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        <BsBoxes className="inline align-top mr-2" />
        SAMB Inventory
      </h1>
      <h2 className="text-xl font-medium text-cyan-600 mb-10">Simple Inventory Management System</h2>
      <div className="min-h-[500px]">
        <NavbarTab />
      </div>
    </main>
  )
}
