export default function Garantias() {
  const garantias = ['Carros/motos', 'Imóveis', 'Máquinas/Implementos', 'Outros bens (sob laudo)']

  return (
    <section id="garantias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Garantias Aceitas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {garantias.map((garantia, index) => (
            <div key={index} className="card text-center">
              <p className="font-medium">{garantia}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}