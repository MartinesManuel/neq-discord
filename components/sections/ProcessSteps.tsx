import Button from "../ui/Button"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  buttonText: string
  isActive?: boolean
}

function ProcessStep({ number, title, description, buttonText, isActive = false }: ProcessStepProps) {
  return (
    <div className="flex-1 border rounded-lg overflow-hidden">
      <div className={`${isActive ? "bg-[#ffda00]" : "bg-gray-100"} p-4 flex items-center`}>
        <div
          className={`${isActive ? "bg-black text-white" : "bg-white text-gray-500 border border-gray-300"} rounded-full w-8 h-8 flex items-center justify-center mr-3`}
        >
          {number}
        </div>
        <h3 className={`font-bold ${isActive ? "" : "text-gray-500"}`}>{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <Button variant="link" href="#" icon>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Simula",
      description: "Calcula el valor de las cuotas según el monto y plazo que necesitas.",
      buttonText: "Simular ahora",
      isActive: true,
    },
    {
      number: 2,
      title: "Solicita",
      description: "Completa tu solicitud en línea con tus datos personales.",
      buttonText: "Solicitar",
      isActive: false,
    },
    {
      number: 3,
      title: "Obtén tu dinero",
      description: "Recibe el dinero en tu cuenta tras la aprobación.",
      buttonText: "Más información",
      isActive: false,
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Pídelo en pocos pasos</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              buttonText={step.buttonText}
              isActive={step.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

