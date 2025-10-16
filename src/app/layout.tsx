import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GJÖF Soluções Financeiras — Crédito com confiança e propósito (PF, PJ e Agro)',
  description: 'Empréstimos com garantia para pessoas, empresas e produtores rurais. Simule parcelas, fale com um especialista e receba com transparência.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-text`}>
        {children}
      </body>
    </html>
  )
}