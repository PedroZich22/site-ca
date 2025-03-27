import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-lg text-zinc-900 mb-4">
            CA Tim Berners-Lee
          </h3>
          <p className="text-sm">
            Centro Acadêmico de Sistemas de Informação do Instituto Federal de
            São Paulo
          </p>
        </div>
        <div>
          <h3 className="font-medium text-zinc-900 mb-4">Links Úteis</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/sobre-curso"
                className="hover:text-purple-700 transition-colors"
              >
                O Curso
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-ca"
                className="hover:text-purple-700 transition-colors"
              >
                Centro Acadêmico
              </Link>
            </li>
            <li>
              <Link
                href="/eventos"
                className="hover:text-purple-700 transition-colors"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-purple-700 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-zinc-900 mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>ca.bsi.ifsp@gmail.com</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-zinc-900 mb-4">Redes Sociais</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-purple-700 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-purple-700 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-purple-700 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6 border-t border-zinc-200">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Centro Acadêmico Tim Berners-Lee - IFSP -
          Feito por Pedro Zich
        </p>
      </div>
    </footer>
  );
}
