'use client'

import { useState } from 'react'

export default function Solicitar() {
  const [form, setForm] = useState({
    nome: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    cidadeUf: '',
    perfil: 'PF',
    valor: '',
    garantia: 'Carro',
    horario: '',
    lgpd: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Enviar para {{endpoint_form}}
    console.log('Form submitted:', form)
  }

  return (
    <section id="solicitar" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Solicitar Crédito</h2>
        <form onSubmit={handleSubmit} className="card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({...form, nome: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">CPF/CNPJ</label>
              <input
                type="text"
                value={form.cpfCnpj}
                onChange={(e) => setForm({...form, cpfCnpj: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="tel"
                value={form.telefone}
                onChange={(e) => setForm({...form, telefone: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Cidade/UF</label>
              <input
                type="text"
                value={form.cidadeUf}
                onChange={(e) => setForm({...form, cidadeUf: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Perfil</label>
              <select
                value={form.perfil}
                onChange={(e) => setForm({...form, perfil: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
              >
                <option value="PF">Pessoa Física</option>
                <option value="PJ">Pessoa Jurídica</option>
                <option value="Agro">Agro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Valor</label>
              <input
                type="number"
                value={form.valor}
                onChange={(e) => setForm({...form, valor: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tipo de garantia</label>
              <select
                value={form.garantia}
                onChange={(e) => setForm({...form, garantia: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
              >
                <option value="Carro">Carro</option>
                <option value="Imóvel">Imóvel</option>
                <option value="Máquina">Máquina</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Melhor horário para contato</label>
              <input
                type="text"
                value={form.horario}
                onChange={(e) => setForm({...form, horario: e.target.value})}
                className="w-full p-3 border border-lines rounded-12"
                placeholder="Ex: Manhã, Tarde"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={form.lgpd}
                onChange={(e) => setForm({...form, lgpd: e.target.checked})}
                className="mr-2"
                required
              />
              <span className="text-sm">Concordo com a Política de Privacidade e LGPD</span>
            </label>
          </div>
          <button type="submit" className="btn-primary w-full mt-6">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  )
}