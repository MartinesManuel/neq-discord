import { Shield, Check } from "lucide-react"
import Card from "../ui/Card"
import Button from "../ui/Button"

interface CoverageItemProps {
  text: string
  included: boolean
}

function CoverageItem({ text, included }: CoverageItemProps) {
  return (
    <li className={`flex items-start ${!included ? "text-gray-400" : ""}`}>
      {included ? (
        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      ) : (
        <span className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5">-</span>
      )}
      <span className="text-sm">{text}</span>
    </li>
  )
}

interface CoverageCardProps {
  title: string
  items: Array<{ text: string; included: boolean }>
}

function CoverageCard({ title, items }: CoverageCardProps) {
  return (
    <Card className="shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-[#e5f0fa] rounded-full p-2 mr-3">
          <Shield className="h-5 w-5 text-[#002c76]" />
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <CoverageItem key={index} text={item.text} included={item.included} />
        ))}
      </ul>
      <Button variant="link" href="#" icon>
        Ver detalles
      </Button>
    </Card>
  )
}

export default function Coverage() {
  const coverages = {
    plus: [
      { text: "Protección por fallecimiento", included: true },
      { text: "Incapacidad total y permanente", included: true },
      { text: "Desempleo involuntario", included: true },
      { text: "Incapacidad temporal", included: true },
    ],
    basic: [
      { text: "Protección por fallecimiento", included: true },
      { text: "Incapacidad total y permanente", included: true },
      { text: "Desempleo involuntario", included: false },
      { text: "Incapacidad temporal", included: false },
    ],
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Coberturas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoverageCard title="Cobertura Plus" items={coverages.plus} />
          <CoverageCard title="Cobertura Básica" items={coverages.basic} />
        </div>
      </div>
    </section>
  )
}

