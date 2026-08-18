import Link from "next/link";

const navLinks = [
  "Inicio",
  "Nosotros",
  "Propiedades",
  "Contacto",
  "Agentes 360",
  "Política de Privacidad",
  "Términos y Condiciones",
];
const agents = ["Freisy Carolina", "Yuderkis Pilier"];
const projects = ["Costa Mar", "Stone Tower 3", "Frailejon Village", "Ver propiedades"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-gray-400 py-16 px-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-50 mb-6">
            Navegación
          </h3>
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-300 hover:text-gray-50 text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-50 mb-6">
            Agentes 360
          </h3>
          <ul className="space-y-3">
            {agents.map((a) => (
              <li key={a}>
                <Link href="#" className="text-gray-300 hover:text-gray-50 text-sm">
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-50 mb-6">
            Proyectos
          </h3>
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p}>
                <Link href="#" className="text-gray-300 hover:text-gray-50 text-sm">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-7 text-center text-xs text-gray-500">
        © 2025 L&apos;Romana Real Estate. Todos los derechos reservados.
      </div>
    </footer>
  );
}
