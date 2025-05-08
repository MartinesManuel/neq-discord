import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="Productos">
            <FooterLink href="#">Cuentas</FooterLink>
            <FooterLink href="#">Créditos</FooterLink>
            <FooterLink href="#">Tarjetas</FooterLink>
            <FooterLink href="#">Inversiones</FooterLink>
            <FooterLink href="#">Seguros</FooterLink>
          </FooterColumn>

          <FooterColumn title="Canales">
            <FooterLink href="#">App Bancolombia</FooterLink>
            <FooterLink href="#">Sucursales</FooterLink>
            <FooterLink href="#">Corresponsales</FooterLink>
            <FooterLink href="#">Cajeros automáticos</FooterLink>
            <FooterLink href="#">Línea de atención</FooterLink>
          </FooterColumn>

          <FooterColumn title="Ayuda">
            <FooterLink href="#">Preguntas frecuentes</FooterLink>
            <FooterLink href="#">Seguridad</FooterLink>
            <FooterLink href="#">Tarifas</FooterLink>
            <FooterLink href="#">Educación financiera</FooterLink>
            <FooterLink href="#">Defensor del consumidor</FooterLink>
          </FooterColumn>

          <FooterColumn title="Acerca de Bancolombia">
            <FooterLink href="#">Quiénes somos</FooterLink>
            <FooterLink href="#">Sostenibilidad</FooterLink>
            <FooterLink href="#">Trabaja con nosotros</FooterLink>
            <FooterLink href="#">Proveedores</FooterLink>
            <FooterLink href="#">Relación con inversionistas</FooterLink>
          </FooterColumn>
        </div>

        <div className="border-t border-gray-800 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=150" alt="Bancolombia" width={150} height={40} />
            </div>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-4">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Bancolombia S.A. Todos los derechos reservados</p>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            <select className="bg-transparent border-none text-xs text-gray-400 focus:outline-none">
              <option value="co">Colombia</option>
              <option value="pa">Panamá</option>
              <option value="pe">Perú</option>
            </select>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          <p>Vigilado por la Superintendencia Financiera de Colombia</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm hover:underline">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  const icons = {
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  }

  return (
    <Link href={href} className="text-white hover:text-[#ffda00]">
      {icons[icon as keyof typeof icons]}
    </Link>
  )
}

