export default function RatesTable() {
  const rates = [
    {
      type: "Tasa fija",
      rate: "Desde 16.55% hasta 28.73%",
      minAmount: "$1.000.000",
      maxAmount: "$50.000.000",
      minTerm: "6 meses",
      maxTerm: "60 meses",
    },
    {
      type: "Tasa preferencial",
      rate: "Desde 15.20% hasta 25.83%",
      minAmount: "$50.000.001",
      maxAmount: "$100.000.000",
      minTerm: "12 meses",
      maxTerm: "72 meses",
    },
    {
      type: "Tasa especial",
      rate: "Desde 14.50% hasta 23.87%",
      minAmount: "$100.000.001",
      maxAmount: "$200.000.000",
      minTerm: "12 meses",
      maxTerm: "84 meses",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Tasas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-medium text-sm">Tipo de tasa</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Tasa E.A.</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Monto mínimo</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Monto máximo</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Plazo mínimo</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Plazo máximo</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr key={index} className={index < rates.length - 1 ? "border-b" : ""}>
                  <td className="py-3 px-4 text-sm">{rate.type}</td>
                  <td className="py-3 px-4 text-sm">{rate.rate}</td>
                  <td className="py-3 px-4 text-sm">{rate.minAmount}</td>
                  <td className="py-3 px-4 text-sm">{rate.maxAmount}</td>
                  <td className="py-3 px-4 text-sm">{rate.minTerm}</td>
                  <td className="py-3 px-4 text-sm">{rate.maxTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          * Las tasas pueden variar según tu perfil crediticio y están sujetas a cambios sin previo aviso.
        </p>
      </div>
    </section>
  )
}

