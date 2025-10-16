export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-action text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Crédito com confiança e propósito.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A GJÖF acredita que toda relação financeira é uma troca sagrada. O crédito não é punição, é confiança.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-secondary">
            Simular parcelas
          </button>
          <button className="btn-primary">
            Solicitar agora
          </button>
        </div>
      </div>
    </section>
  )
}