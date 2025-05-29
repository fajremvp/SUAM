export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col">
      <header className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">SUAM</h1>
        <nav className="space-x-6 text-lg">
          <a href="#benefits" className="hover:text-indigo-300 transition">
            Benefícios
          </a>
          <a href="#mission" className="hover:text-indigo-300 transition">
            Missão
          </a>
          <a
            href="https://github.com/fajremvp/SUAM"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-300 transition"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold max-w-4xl leading-tight mb-6 drop-shadow-lg">
          Sistema Universal de Autenticação de Mídia
        </h2>
        <p className="text-xl max-w-3xl mb-10 opacity-90">
          SUAM valida vídeos, imagens e áudios para garantir que você saiba o
          que é real. Teste qualquer arquivo ou link e tenha respostas rápidas.
        </p>
        <a
          href="#upload-section"
          className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-lg font-semibold shadow-lg transition"
        >
          Teste Agora
        </a>
      </main>

      <section
        id="benefits"
        className="bg-indigo-800 py-16 px-6 text-white max-w-6xl mx-auto rounded-lg shadow-lg mt-12"
      >
        <h3 className="text-3xl font-bold text-center mb-10">
          Por que usar SUAM?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-indigo-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Fácil de usar</h4>
            <p>Envie arquivos ou cole links, sem complicação.</p>
          </div>
          <div className="bg-indigo-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Seguro e confiável</h4>
            <p>
              Seu conteúdo é analisado com tecnologias avançadas e respeitando
              sua privacidade.
            </p>
          </div>
          <div className="bg-indigo-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Resposta rápida</h4>
            <p>
              Resultados claros e instantâneos para você agir com segurança.
            </p>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="max-w-4xl mx-auto py-16 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Nossa missão</h3>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Em um mundo cheio de informações manipuladas, queremos ser sua fonte
          de confiança para validar o que você vê e ouve. Tecnologia de ponta
          para um futuro mais transparente.
        </p>
        <a
          href="https://github.com/fajremvp/SUAM"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded font-semibold shadow transition"
        >
          Veja o código no GitHub
        </a>
      </section>

      <footer className="bg-indigo-900 text-indigo-300 text-center p-6 mt-auto">
        © 2025 SUAM. Todos os direitos reservados.
      </footer>
    </div>
  );
}
