'use client'

import { useState } from 'react'

export default function Simulador() {
  const [valor, setValor] = useState('')
  const [prazo, setPrazo] = useState('')
  const [perfil, setPerfil] = useState('PF')
  const [garantia, setGarantia] = useState('Carro')
  const [resultado, setResultado] = useState<{ parcela: number; taxa: number; cet: number } | null>(null)

  const calcular = () => {
    const v = parseFloat(valor)
    const p = parseInt(prazo)
    if (v && p) {
      // Simulação simples Price
      const taxaMensal = 0.02 // 2% a.m. exemplo
      const parcela = (v * taxaMensal * Math.pow(1 + taxaMensal, p)) / (Math.pow(1 + taxaMensal, p) - 1)
      const cet = taxaMensal + 0.0025 // CET aproximado
      setResultado({ parcela, taxa: taxaMensal * 100, cet: cet * 100 })
    }
  }

  return (
    <section id="simulador" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Simulador de Crédito</h2>
        <div className="card">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Valor (R$)</label>
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="w-full p-3 border border-lines rounded-12"
                placeholder="Ex: 10000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Prazo (meses)</label>
              <input
                type="number"
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
                className="w-full p-3 border border-lines rounded-12"
                placeholder="Ex: 24"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Perfil</label>
              <select
                value={perfil}
                onChange={(e) => setPerfil(e.target.value)}
                className="w-full p-3 border border-lines rounded-12"
              >
                <option value="PF">Pessoa Física</option>
                <option value="PJ">Pessoa Jurídica</option>
                <option value="Agro">Agro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Garantia</label>
              <select
                value={garantia}
                onChange={(e) => setGarantia(e.target.value)}
                className="w-full p-3 border border-lines rounded-12"
              >
                <option value="Carro">Carro</option>
                <option value="Imóvel">Imóvel</option>
                <option value="Máquina">Máquina</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>
          <button onClick={calcular} className="btn-primary w-full md:w-auto">
            Calcular
          </button>
          {resultado && (
            <div className="mt-6 p-4 bg-background rounded-12">
              <h3 className="font-bold mb-2">Resultado da Simulação</h3>
              <p>Parcela estimada: R$ {resultado.parcela.toFixed(2)}</p>
              <p>Taxa a.m.: {resultado.taxa.toFixed(2)}%</p>
              <p>CET aproximado: {resultado.cet.toFixed(2)}%</p>
              <p className="text-sm text-gray-600 mt-2">Exemplo não vinculante. Sujeito à análise e avaliação da garantia.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}