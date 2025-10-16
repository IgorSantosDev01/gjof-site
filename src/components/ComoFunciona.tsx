export default function ComoFunciona() {
  const passos = [
    { titulo: 'Solicite/Simule', descricao: 'Preencha o formulário ou use nosso simulador para ver as opções disponíveis.' },
    { titulo: 'Envie documentos', descricao: 'Envie os documentos necessários conforme o produto escolhido.' },
    { titulo: 'Avaliação da garantia', descricao: 'Realizamos vistoria e avaliação com LTV de 60–70%.' },
    { titulo: 'Assinatura digital e liberação', descricao: 'Assine digitalmente e receba o crédito em sua conta.' },
  ]

  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{passo.titulo}</h3>
              <p>{passo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}