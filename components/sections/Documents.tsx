import Image from "next/image"
import { FileText } from "lucide-react"
import Card from "../ui/Card"

interface DocumentItemProps {
  title: string
  description: string
}

function DocumentItem({ title, description }: DocumentItemProps) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <FileText className="h-5 w-5 text-[#002c76]" />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export default function Documents() {
  const documents = [
    {
      title: "Cédula de ciudadanía",
      description: "Documento de identidad vigente",
    },
    {
      title: "Comprobantes de ingresos",
      description: "Certificado laboral, extractos bancarios o declaración de renta",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Documentos</h2>
        <Card className="shadow-sm">
          <h3 className="font-bold mb-4">Documentos requeridos</h3>
          <ul className="space-y-3">
            {documents.map((doc, index) => (
              <DocumentItem key={index} title={doc.title} description={doc.description} />
            ))}
          </ul>
        </Card>
        <div className="mt-8">
          <Image
            src="/placeholder.svg?height=300&width=800"
            alt="Mujer con celular"
            width={800}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

