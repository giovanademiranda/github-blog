import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Github Blog',
  description: 'Utilização de clientes HTTP consumindo a API do Github para criar um blog pessoal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body className='w-screen h-screen flex flex-col items-center'>
        {children}
      </body>
    </html>
  )
}
