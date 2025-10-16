'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Solucoes from '../components/Solucoes'
import Simulador from '../components/Simulador'
import ComoFunciona from '../components/ComoFunciona'
import Garantias from '../components/Garantias'
import FAQ from '../components/FAQ'
import Solicitar from '../components/Solicitar'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import Parceiro from '../components/Parceiro'

export default function Home() {
  const [modo, setModo] = useState<'cliente' | 'parceiro'>('cliente')

  return (
    <div className="min-h-screen">
      <Header modo={modo} setModo={setModo} />
      {modo === 'cliente' ? (
        <>
          <Hero />
          <Solucoes />
          <Simulador />
          <ComoFunciona />
          <Garantias />
          <FAQ />
          <Solicitar />
          <Contato />
        </>
      ) : (
        <Parceiro />
      )}
      <Footer />
    </div>
  )
}