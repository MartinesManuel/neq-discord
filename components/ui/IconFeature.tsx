import type { LucideIcon } from "lucide-react"

interface IconFeatureProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function IconFeature({ icon: Icon, title, description }: IconFeatureProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="bg-[#e5f0fa] rounded-full p-3">
          <Icon className="h-6 w-6 text-[#002c76]" />
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  )
}

