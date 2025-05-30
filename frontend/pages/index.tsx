import Link from "next/link";
import { useEffect } from "react";

// Scroll reveal animation hook
function useScrollReveal() {
  useEffect(() => {
    const revealElements =
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const reveal = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight * 0.92) {
          el.classList.add("revealed");
        } else {
          el.classList.remove("revealed");
        }
      });
    };
    reveal();
    window.addEventListener("scroll", reveal);
    window.addEventListener("resize", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-200 via-white to-indigo-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-indigo-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo SUAM"
              className="h-11 w-11 rounded-full shadow"
            />
            <span className="text-3xl font-extrabold tracking-tight text-indigo-700 drop-shadow">
              SUAM
            </span>
          </div>
          <nav className="flex gap-8 text-lg font-medium">
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
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-48 pb-32 px-4 bg-gradient-to-b from-indigo-50/80 via-white/90 to-indigo-100/80 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>
        <h1 className="text-2xl md:text-8xl font-extrabold mb-6 text-indigo-900 drop-shadow-lg tracking-tight reveal-on-scroll">
          Sistema Universal de Autenticação de Mídia
        </h1>
        <p className="text-base md:text-2xl max-w-5xl mx-auto mb-5 text-indigo-800 opacity-90 reveal-on-scroll delay-100">
          Um padrão global e aberto para identificar, autenticar e rastrear
          conteúdos gerados por IA — vídeo, imagem ou áudio — garantindo
          transparência, segurança e confiança digital.
        </p>
      </section>

      {/* Valide seu conteúdo */}
      <section
        id="upload-section"
        className="relative bg-white/95 py-10 px-8 max-w-3xl mx-auto rounded-3xl shadow-2xl mt-[-4rem] z-10 text-center reveal-on-scroll"
      >
        <h3 className="text-2xl font-bold mb-3 text-indigo-900">
          Valide seu conteúdo
        </h3>
        <p className="mb-6 text-lg opacity-90 text-indigo-800">
          Envie uma imagem, vídeo, áudio, link ou hash para verificar a
          autenticidade.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <input
            type="file"
            className="block w-full md:w-auto text-indigo-900 bg-indigo-100 rounded px-4 py-2 border border-indigo-200 shadow-sm"
            disabled
          />
          <input
            type="text"
            placeholder="Cole um link ou hash"
            className="block w-full md:w-auto text-indigo-900 bg-indigo-100 rounded px-4 py-2 border border-indigo-200 shadow-sm"
            disabled
          />
          <button
            className="bg-indigo-500 px-6 py-2 rounded font-semibold shadow hover:bg-indigo-600 transition text-white"
            disabled
          >
            Validar
          </button>
        </div>
      </section>

      {/* Para Empresas */}
      <section
        id="empresas"
        className="bg-white/95 py-12 px-10 max-w-2xl mx-auto rounded-3xl shadow-2xl mt-12 text-center reveal-on-scroll"
      >
        <h3 className="text-2xl font-bold mb-4 text-indigo-900">
          Para empresas
        </h3>
        <p className="mb-5 text-lg opacity-90 text-indigo-800">
          Integre suas soluções de IA ao SUAM para garantir que todo conteúdo
          gerado siga padrões globais de autenticação, rastreabilidade e
          transparência.
        </p>
        <ul className="list-disc list-inside text-indigo-700 text-left max-w-xl mx-auto mb-5 space-y-2">
          <li>
            <strong>Adote os padrões SUAM:</strong> Implemente identificadores
            embutidos, assinaturas digitais e metadados conforme especificação.
          </li>
          <li>
            <strong>Gere e registre suas chaves públicas:</strong> Cada modelo
            ou pipeline de IA deve possuir um par de chaves (privada para
            assinatura, pública para validação). Registre sua chave pública no
            banco de dados global do SUAM para que qualquer pessoa possa validar
            conteúdos gerados.
          </li>
          <li>
            <strong>Integre com o banco de dados SUAM:</strong> Utilize as APIs
            do SUAM para registrar modelos, atualizar chaves e consultar
            informações de autenticação. Isso garante que seus conteúdos possam
            ser autenticados globalmente.
          </li>
          <li>
            <strong>Facilite a validação:</strong> Permita que usuários e
            parceiros possam autenticar conteúdos facilmente via SUAM,
            fornecendo links ou hashes verificáveis.
          </li>
        </ul>
        <p className="text-indigo-700">
          Para documentação técnica, exemplos de integração e acesso à API,
          acesse o{" "}
          <a
            href="https://github.com/fajremvp/SUAM"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-indigo-800"
          >
            repositório no GitHub
          </a>
          .
        </p>
      </section>

      {/* Componentes-Chave do SUAM */}
      <section
        id="components"
        className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-4 max-w-6xl mx-auto rounded-3xl shadow-2xl mt-20 reveal-on-scroll"
      >
        <h3 className="text-3xl font-extrabold text-center mb-14 text-indigo-900 drop-shadow">
          Componentes-Chave do SUAM
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* 1. Identificador Embutido (ID-IA) */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-200">
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-800">
              <span className="text-2xl">🔗</span> Identificador Embutido
              (ID-IA)
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left space-y-1">
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
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-200 delay-100">
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-800">
              <span className="text-2xl">🔐</span> Assinatura Digital
              Criptográfica
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left space-y-1">
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
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-200 delay-200">
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-800">
              <span className="text-2xl">💧</span> Marca d'água invisível
              persistente
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left space-y-1">
              <li>Embutida nos pixels, sons ou frames do conteúdo</li>
              <li>Sobrevive a compressões, filtros e pequenos cortes</li>
              <li>Sempre aponta para a origem IA</li>
            </ul>
          </div>
          {/* Linha 2: dois blocos centralizados */}
          <div className="col-span-1"></div>
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-200 delay-300">
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-800">
              <span className="text-2xl">📜</span> Manifesto de Conteúdo (C2PA
              ou equivalente)
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left space-y-1">
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
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-200 delay-400">
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-800">
              <span className="text-2xl">🧠</span> Indicador Visual Obrigatório
            </h4>
            <ul className="list-disc list-inside text-indigo-700 mb-2 text-left space-y-1">
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

      {/* Infraestrutura Necessária */}
      <section
        id="infra"
        className="max-w-3xl mx-auto py-10 px-10 text-center bg-indigo-50 rounded-3xl shadow-2xl mt-20 reveal-on-scroll"
      >
        <h3 className="text-3xl font-bold mb-4 text-indigo-900">
          Infraestrutura Necessária
        </h3>
        <ul className="list-disc list-inside text-indigo-700 text-lg mb-4 text-left mx-auto max-w-2xl space-y-1">
          <li>Registro público de modelos e chaves públicas</li>
          <li>Apoio de grandes empresas (Google, Meta, OpenAI, Adobe)</li>
          <li>Acordos internacionais (ONU, UNESCO, G7)</li>
        </ul>
      </section>

      {/* O que não funciona sozinho */}
      <section
        id="limitations"
        className="max-w-3xl mx-auto py-10 px-10 text-center bg-white rounded-3xl shadow-2xl mt-12 reveal-on-scroll"
      >
        <h3 className="text-3xl font-bold mb-6 text-indigo-900">
          O que não funciona sozinho
        </h3>
        <ul className="list-disc list-inside text-indigo-700 text-lg mb-6 text-left mx-auto max-w-2xl space-y-1">
          <li>❌ EXIF/XMP padrão: facilmente removíveis ou alteráveis</li>
          <li>
            ❌ Detectores visuais de IA: imprecisos com conteúdos realistas
          </li>
          <li>❌ Soluções locais por empresa: não escalam sem padronização</li>
        </ul>
      </section>

      {/* Missão */}
      <section
        id="mission"
        className="max-w-3xl mx-auto py-10 px-10 text-center bg-indigo-100 rounded-3xl shadow-2xl mt-12 reveal-on-scroll"
      >
        <h3 className="text-3xl font-bold mb-4 text-indigo-900">Missão</h3>
        <p className="text-lg text-indigo-800 leading-snug">
          Imaginamos um mundo onde cada conteúdo digital é{" "}
          <strong>verificável</strong>, <strong>rastreável</strong> e{" "}
          <strong>confiável</strong> — graças a tecnologias abertas,
          interoperáveis e seguras.
        </p>
      </section>

      <div className="mt-20" />
      <footer className="bg-gradient-to-r from-indigo-200/80 via-indigo-100 to-white text-indigo-900 text-center p-8 mt-auto shadow-inner text-lg">
        © 2025 SUAM. Todos os direitos reservados.
      </footer>

      {/* Scroll Reveal Animation */}
      <style jsx global>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(48px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: none;
        }
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
