"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const projects = [
  { name: "Altos de Frailejon", href: "https://frailejon-ii.vercel.app/" },
  { name: "Frailejon Village", href: "https://frailejon-village.vercel.app/" },
  { name: "Costa Mar", href: "https://costa-mar-1.vercel.app/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-[70px] px-10">
        <span className="font-bold text-gray-900 text-base">
          L&apos;Romana Real Estate
        </span>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {/* Proyectos con dropdown */}
          <li ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-gray-700 hover:text-gray-900 text-sm flex items-center gap-1 bg-transparent border-none cursor-pointer font-normal"
            >
              Proyectos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="absolute top-[calc(100%+.75rem)] left-0 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[200px] overflow-hidden z-50">
                {projects.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    target={p.href !== "#" ? "_blank" : undefined}
                    rel={p.href !== "#" ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {[
            { name: "Propiedades", href: "#" },
            { name: "Agentes", href: "https://www.lromanarealestate.com/agentes" },
            { name: "Sobre Nosotros", href: "https://www.lromanarealestate.com/about" },
            { name: "Contacto", href: "#" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
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
