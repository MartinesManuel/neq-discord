import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title:  'Nequi',
  description: 'Sistema de educación financiera ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/icon-logo.png" type="image/png" />  
      <head>
        
        <title>Nequi</title>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
