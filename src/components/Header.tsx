import Image from 'next/image'

interface HeaderProps {
  modo: 'cliente' | 'parceiro'
  setModo: (modo: 'cliente' | 'parceiro') => void
}

export default function Header({ modo, setModo }: HeaderProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-white shadow-sm border-b border-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/db63e004-9faf-4847-bb6d-8c92e2c510ec.png"
              alt="GJÖF Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {modo === 'cliente' && (
              <>
                <a href="#solucoes" onClick={() => scrollToSection('solucoes')} className="text-text hover:text-primary">Soluções</a>
                <a href="#simulador" onClick={() => scrollToSection('simulador')} className="text-text hover:text-primary">Simulador</a>
                <a href="#como-funciona" onClick={() => scrollToSection('como-funciona')} className="text-text hover:text-primary">Como funciona</a>
                <a href="#garantias" onClick={() => scrollToSection('garantias')} className="text-text hover:text-primary">Garantias</a>
                <a href="#faq" onClick={() => scrollToSection('faq')} className="text-text hover:text-primary">FAQ</a>
                <a href="#solicitar" onClick={() => scrollToSection('solicitar')} className="text-text hover:text-primary">Solicitar</a>
                <a href="#contato" onClick={() => scrollToSection('contato')} className="text-text hover:text-primary">Contato</a>
              </>
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setModo('cliente')}
              className={`px-4 py-2 rounded-12 font-medium ${modo === 'cliente' ? 'bg-primary text-white' : 'bg-gray-200 text-text'}`}
            >
              Sou cliente
            </button>
            <button
              onClick={() => setModo('parceiro')}
              className={`px-4 py-2 rounded-12 font-medium ${modo === 'parceiro' ? 'bg-primary text-white' : 'bg-gray-200 text-text'}`}
            >
              Sou parceiro
            </button>
            {modo === 'cliente' && (
              <button
                onClick={() => scrollToSection('solicitar')}
                className="btn-primary"
              >
                Solicitar crédito
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}