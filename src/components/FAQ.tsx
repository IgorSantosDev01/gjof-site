export default function FAQ() {
  const faqs = [
    { pergunta: 'Quem pode solicitar?', resposta: 'Pessoas físicas, jurídicas e produtores rurais com garantia.' },
    { pergunta: 'Há restrição?', resposta: 'Sim, sujeita à análise de crédito e garantia.' },
    { pergunta: 'Qual o prazo de liberação?', resposta: 'Varia por produto, de dias a semanas.' },
    { pergunta: 'Como funciona a avaliação de garantia/LTV?', resposta: 'Avaliação profissional com LTV de 60-70%.' },
    { pergunta: 'Como são definidas as taxas/CET?', resposta: 'Baseadas no perfil, garantia e mercado.' },
    { pergunta: 'Posso quitar antecipadamente?', resposta: 'Sim, sem multas adicionais.' },
    { pergunta: 'Cobertura nacional?', resposta: 'Sim, em todo território brasileiro.' },
    { pergunta: 'LGPD e segurança de dados?', resposta: 'Cumprimos rigorosamente a LGPD.' },
  ]

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="card">
              <summary className="font-bold cursor-pointer">{faq.pergunta}</summary>
              <p className="mt-2">{faq.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}