import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-[70px] px-10">
        <span className="font-bold text-gray-900 text-base">
          L&apos;Romana Real Estate
        </span>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {["Proyectos", "Propiedades", "Agentes", "Sobre Nosotros", "Contacto"].map(
            (item, i) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm flex items-center gap-1"
                >
                  {item}
                  {i === 0 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            )
          )}
        </ul>
        <Link
          href="#contacto"
          className="bg-[#1b5db8] text-white rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Empezar Búsqueda
        </Link>
      </div>
    </nav>
  );
}
