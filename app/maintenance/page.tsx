import { Wrench, Settings, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MaintenancePage() {
    return (
        // Contenedor principal con fondo blanco, centrado y con padding
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            {/* Grid principal dividido en 2 columnas en pantallas grandes */}
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">

                {/* Sección de ilustración (lado izquierdo) */}
                <div className="relative scale-90 lg:scale-90 xl:scale-75"> {/* Reducido tamaño global de las ilustraciones */}
                    <div className="relative z-10">
                        {/* Dispositivo principal (simula una computadora o pantalla) */}
                        <div className="relative mx-auto w-72 h-56 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                            {/* Pantalla del dispositivo */}
                            <div className="absolute top-4 left-4 right-4 bottom-10 bg-gray-900 rounded-2xl overflow-hidden">
                                {/* Barra del navegador */}
                                <div className="h-8 bg-gray-800 flex items-center px-3 gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                {/* Contenido de la pantalla */}
                                <div className="p-4 h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <div className="text-center">
                                        <Code className="w-10 h-10 text-white mx-auto mb-2" />
                                        <div className="text-white text-xs font-mono">{"</>"}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Base del dispositivo */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-3 bg-yellow-600 rounded-t-lg"></div>
                        </div>

                        {/* Elementos flotantes decorativos */}
                        <div className="absolute -top-4 -left-4 animate-bounce">
                            <div className="w-14 h-14 bg-gray-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                                <Settings className="w-7 h-7 text-white animate-spin" />
                            </div>
                        </div>

                        <div className="absolute -top-8 -right-8 animate-pulse">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-12 animate-bounce delay-300">
                            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-8 animate-pulse delay-500">
                            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <Settings className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de contenido (lado derecho) */}
                <div className="text-center lg:text-left space-y-6 w-full max-w-xl mx-auto px-4">
                    {/* Carita triste */}
                    <div className="text-8xl font-bold text-violetaN mb-4">:(</div>

                    {/* Título principal */}
                    <div className="space-y-2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                            ¡LAMENTAMOS
                            <br />
                            <span className="text-pink-600">LAS MOLESTIAS!</span>
                        </h1>
                    </div>

                    {/* Mensajes informativos */}
                    <div className="space-y-4 text-gray-600 text-lg">
                        <p className="leading-relaxed">Este espacio no se encuentra disponible.</p>
                        <p className="leading-relaxed"></p>
                    </div>

                    {/* Tarjeta para contactar al programador */}
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-rosado rounded-full flex items-center justify-center">
                                    <Code className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">¿Necesitas activar la pagina?</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Para poder solucionar este problema, por favor comunicarte directamente con el programador.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Indicador de estado y tiempo estimado */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-violetaN rounded-full animate-pulse"></div>
                            <span>Estado: Caido</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <span>Tiempo estimado: 2-4 horas</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
