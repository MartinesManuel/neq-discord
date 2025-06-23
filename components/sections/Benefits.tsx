import Card from "../ui/Card"

interface BenefitCardProps {
  title: string
  description: string
  color: string
}

function BenefitCard({ title, description, color }: BenefitCardProps) {
  return (
    <Card color={color}>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </Card>
  )
}

export default function Benefits() {
  const benefits = [
    {
      title: "Sin codeudor ni fiador",
      description: "Obtén tu crédito sin necesidad de un respaldo adicional.",
      color: "orange",
    },
    {
      title: "100% digital",
      description: "Solicita tu crédito desde la app o la web sin trámites presenciales.",
      color: "green",
    },
    {
      title: "Desembolso inmediato",
      description: "Recibe el dinero en tu cuenta en cuestión de minutos.",
      color: "purple",
    },
    {
      title: "Paga a tu ritmo",
      description: "Elige el plazo que mejor se adapte a tus necesidades.",
      color: "orange",
    },
    {
      title: "Tasa y cuota fija",
      description: "Conoce desde el principio cuánto pagarás mensualmente.",
      color: "green",
    },
    {
      title: "Libre destinación",
      description: "Usa el dinero para lo que necesites sin restricciones.",
      color: "purple",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Beneficios para ti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} color={benefit.color} />
          ))}
        </div>
      </div>
    </section>
  )
}

