import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search, User } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=150"
            alt="Bancolombia"
            width={150}
            height={40}
            className="mr-8"
          />
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#002c76]">
              Personas
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#002c76]">
              Pymes
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#002c76]">
              Empresas
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-sm font-medium text-gray-700">
            <Search className="mr-1 h-4 w-4" />
            Buscar
          </button>
          <button className="hidden md:flex items-center text-sm font-medium text-gray-700">
            <User className="mr-1 h-4 w-4" />
            Ingresa
          </button>
          <button className="flex md:hidden">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

