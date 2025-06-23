import { CreditCard, Clock, DollarSign, Shield, FileText, Smartphone } from "lucide-react"
import IconFeature from "../ui/IconFeature"

export default function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Tasa fija",
      description: "Tu tasa de interés se mantiene igual durante toda la vigencia del crédito.",
    },
    {
      icon: Clock,
      title: "Desembolso rápido",
      description: "Recibe el dinero en tu cuenta en minutos después de la aprobación.",
    },
    {
      icon: DollarSign,
      title: "Montos flexibles",
      description: "Desde $1.000.000 hasta $200.000.000 según tu capacidad de pago.",
    },
    {
      icon: Shield,
      title: "Seguro opcional",
      description: "Protege tu crédito con nuestras coberturas opcionales.",
    },
    {
      icon: FileText,
      title: "Documentación mínima",
      description: "Solo necesitas tu cédula y algunos datos básicos.",
    },
    {
      icon: Smartphone,
      title: "Gestión digital",
      description: "Administra tu crédito desde la app o la web de Bancolombia.",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Conoce más de tu crédito</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <IconFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

