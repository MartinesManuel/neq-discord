import Image from "next/image"
import { Home, Info } from "lucide-react"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Pareja abrazada en la playa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c76]/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative -mt-[200px] md:-mt-[250px] max-w-xl text-white z-10 p-4">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs mb-4">
            <Home className="h-3 w-3 mr-1" />
            <span>Crédito de consumo</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Logra tus metas con un Crédito de Libre Inversión</h1>
          <p className="text-sm md:text-base mb-6">
            Solicita tu crédito 100% digital y recibe el dinero en tu cuenta en minutos.
          </p>
          <Button variant="primary" icon>
            Simúlalo
          </Button>
          <div className="mt-4 text-xs flex items-center">
            <Info className="h-3 w-3 mr-1" />
            <span>Aplican términos y condiciones</span>
          </div>
        </div>
      </div>
    </section>
  )
}

