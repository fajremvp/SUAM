import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-100 to-indigo-200 text-indigo-900 flex flex-col">
      <header className="p-6 w-full flex items-center justify-between bg-white shadow">
        {/* SUAM no canto esquerdo com logo à esquerda do texto */}
        <div className="flex items-center mr-8">
          <img src="/logo.png" alt="Logo SUAM" className="h-10 w-auto mr-3" />
          <h1 className="text-3xl font-bold tracking-wide whitespace-nowrap">
            SUAM
          </h1>
        </div>
        {/* Menu alinhado à direita */}
        <nav className="space-x-6 text-lg flex">
          <a href="#mission" className="hover:text-indigo-600 transition">
            Missão
          </a>
          <a
            href="https://github.com/fajremvp/SUAM"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition"
          >
            GitHub
          </a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <div className="mt-16" />
        <h2 className="text-4xl font-extrabold max-w-4xl leading-tight mb-6 drop-shadow-lg text-indigo-900">
          Sistema Universal de Autenticação de Mídia
        </h2>
        <p className="text-xl max-w-5xl mb-5 opacity-90 text-indigo-800">
          Um padrão global e aberto para identificar, autenticar e rastrear
          conteúdos gerados por IA — vídeo, imagem ou áudio — garantindo
          transparência, segurança e confiança digital.
        </p>
      </main>
      {/* Seção de upload simulada */}
      <section
        id="upload-section"
        className="bg-white py-16 px-6 text-indigo-900 max-w-3xl mx-auto rounded-lg shadow-lg mt-12 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Valide seu conteúdo</h3>
        <p className="mb-6 opacity-90">
          Envie uma imagem, vídeo, áudio, link ou hash para verificar a
          autenticidade.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <input
            type="file"
            className="block w-full md:w-auto text-indigo-900 bg-indigo-100 rounded px-4 py-2"
            disabled
          />
          <input
            type="text"
            placeholder="Cole um link ou hash"
            className="block w-full md:w-auto text-indigo-900 bg-indigo-100 rounded px-4 py-2"
            disabled
          />
          <button
            className="bg-indigo-500 px-6 py-2 rounded font-semibold shadow hover:bg-indigo-600 transition text-white"
            disabled
          >
            Validar
          </button>
        </div>
        <p className="text-sm text-indigo-400">
          (Funcionalidade em desenvolvimento)
        </p>
      </section>
      {/* Componentes-Chave do SUAM */}
      <section
        id="components"
        className="bg-indigo-100 py-16 px-6 text-indigo-900 max-w-6xl mx-auto rounded-lg shadow-lg mt-12"
      >
        <h3 className="text-3xl font-bold text-center mb-10">
          Componentes-Chave do SUAM
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* 1. Identificador Embutido (ID-IA) */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              🔗 Identificador Embutido (ID-IA)
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left">
              <li>Gerado no momento da criação pela IA</li>
              <li>
                Contém: modelo usado, data/hora, parâmetros de criação, chave
                pública da plataforma, ID único global
              </li>
            </ul>
            <span className="block text-sm text-indigo-500 mb-2">
              Exemplo: IA-ID: VEO3-GGL-2025-05-28T18:30Z-AB123XYZ456
            </span>
          </div>
          {/* 2. Assinatura Digital Criptográfica */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              🔐 Assinatura Digital Criptográfica
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left">
              <li>
                Conteúdo assinado com a chave privada do modelo ou da plataforma
                de IA
              </li>
              <li>
                Verificável com chave pública registrada em repositório global
              </li>
              <li>Garante que o conteúdo não foi alterado após a criação</li>
            </ul>
          </div>
          {/* 3. Marca d'água invisível persistente */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              💧 Marca d'água invisível persistente
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left">
              <li>Embutida nos pixels, sons ou frames do conteúdo</li>
              <li>Sobrevive a compressões, filtros e pequenos cortes</li>
              <li>Sempre aponta para a origem IA</li>
            </ul>
          </div>
          {/* 4. Manifesto de Conteúdo (C2PA ou equivalente) */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              📜 Manifesto de Conteúdo (C2PA ou equivalente)
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left">
              <li>JSON assinado anexado como metadado interno não editável</li>
              <li>
                Contém: origem, declaração, link de verificação, hash SHA256
              </li>
              <li>
                <a
                  href="https://c2pa.org"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-indigo-800"
                >
                  Padrão sugerido: C2PA
                </a>
              </li>
            </ul>
          </div>
          {/* 5. Indicador Visual Obrigatório */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              🧠 Indicador Visual Obrigatório
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left">
              <li>Todo conteúdo público deve ter uma indicação visível</li>
              <li>
                Pode ser um ícone (
                <span className="font-mono">🧠 IA Verified</span>), etiqueta (
                <span className="font-mono">Gerado por IA</span>) ou overlay no
                canto/frame inicial
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="infra"
        className="max-w-4xl mx-auto py-16 px-6 text-center bg-indigo-100 rounded-lg shadow-lg mt-12"
      >
        <h3 className="text-3xl font-bold mb-6 text-indigo-900">
          Infraestrutura Necessária
        </h3>
        <ul className="list-disc list-inside text-indigo-700 text-lg mb-6 text-left mx-auto max-w-2xl">
          <li>Registro público de modelos e chaves públicas</li>
          <li>Apoio de grandes empresas (Google, Meta, OpenAI, Adobe)</li>
          <li>Acordos internacionais (ONU, UNESCO, G7)</li>
        </ul>
      </section>
      <section
        id="limitations"
        className="max-w-4xl mx-auto py-16 px-6 text-center bg-white rounded-lg shadow-lg mt-12"
      >
        <h3 className="text-3xl font-bold mb-6 text-indigo-900">
          O que não funciona sozinho
        </h3>
        <ul className="list-disc list-inside text-indigo-700 text-lg mb-6 text-left mx-auto max-w-2xl">
          <li>❌ EXIF/XMP padrão: facilmente removíveis ou alteráveis</li>
          <li>
            ❌ Detectores visuais de IA: imprecisos com conteúdos realistas
          </li>
          <li>❌ Soluções locais por empresa: não escalam sem padronização</li>
        </ul>
      </section>
      {/* Seção Missão no final da página */}
      <section
        id="mission"
        className="max-w-4xl mx-auto py-16 px-6 text-center bg-indigo-100 rounded-lg shadow-lg mt-12"
      >
        <h3 className="text-3xl font-bold mb-6 text-indigo-900">Missão</h3>
        <p className="text-xl text-indigo-800">
          Imaginamos um mundo onde cada conteúdo digital é{" "}
          <strong>verificável</strong>, <strong>rastreável</strong> e{" "}
          <strong>confiável</strong> — com a ajuda de tecnologias abertas,
          interoperáveis e seguras.
        </p>
      </section>
      <div className="mt-8" />
      <footer className="bg-indigo-200 text-indigo-900 text-center p-6 mt-auto">
        © 2025 SUAM. Todos os direitos reservados.
      </footer>
    </div>
  );
}
