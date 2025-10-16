'use client'

import { useState } from 'react'

export default function Solucoes() {
  const [aba, setAba] = useState<'publico' | 'produto'>('publico')

  return (
    <section id="solucoes" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Soluções</h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setAba('publico')}
            className={`px-6 py-3 rounded-12 font-medium mr-4 ${aba === 'publico' ? 'bg-primary text-white' : 'bg-white text-text border border-lines'}`}
          >
            Por Público
          </button>
          <button
            onClick={() => setAba('produto')}
            className={`px-6 py-3 rounded-12 font-medium ${aba === 'produto' ? 'bg-primary text-white' : 'bg-white text-text border border-lines'}`}
          >
            Por Produto
          </button>
        </div>

        {aba === 'publico' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary">Pessoa Física (PF)</h3>
              <ul className="space-y-2">
                <li>• Crédito Pessoal (12–36x; análise de capacidade)</li>
                <li>• Consignado (até 96x; margem 30%)</li>
                <li>• Limpa Nome (melhora score; ações legais)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary">Pessoa Jurídica (PJ)</h3>
              <ul className="space-y-2">
                <li>• Capital de Giro (faturamento ≥ R$500 mil/ano; até R$550 mil; 1 semana)</li>
                <li>• Consórcio/Seguros corporativos</li>
                <li>• Energia Solar (economia até 85%; financiamento até 36x)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary">Agro</h3>
              <ul className="space-y-2">
                <li>• Crédito Rural (parcerias em alinhamento)</li>
                <li>• Máquinas/Implementos (LTV 60–70%)</li>
                <li>• Seguros rurais</li>
              </ul>
            </div>
          </div>
        )}

        {aba === 'produto' && (
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Limpa Nome</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>• Liminar (1 ano): até 20 dias; R$ 800,00</div>
                <div>• Definitiva (5 anos): até 20 dias; R$ 1.400,00</div>
                <div>• Simplificada (1 ano): até 20 dias; R$ 1.000,00</div>
                <div>• Jusbrasil/Escavador/Google + blindagem 1 ano: até 20 dias; R$ 1.400,00</div>
                <div>• BACEN definitivo: até 180 dias; R$ 3.500,00</div>
                <div>• Rating comercial: até 45 dias; R$ 1.500,00</div>
              </div>
              <p className="text-sm text-gray-600">Limpa CPF/CNPJ; 100% legal; não elimina a dívida; não garante aprovação.</p>
              <button className="btn-primary mt-4">Saiba mais</button>
            </div>
            {/* Adicionar outros produtos similarmente */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Crédito Pessoal</h3>
              <p>Débito na conta de luz / cartão de crédito / débito em conta; 12–36 parcelas; valores menores; taxa conforme valor, score e prazo; análise de capacidade.</p>
              <p className="text-sm mt-2">Docs: RG/CNH, CPF, residência, renda, valor.</p>
              <button className="btn-primary mt-4">Solicitar</button>
            </div>
            {/* Continuar com outros produtos */}
          </div>
        )}
      </div>
    </section>
  )
}