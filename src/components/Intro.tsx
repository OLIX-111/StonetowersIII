import Link from "next/link";

export default function Intro() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-3xl leading-relaxed text-gray-800 mb-8 font-semibold">
          Vive en un proyecto exclusivo en La Romana, diseñado para combinar lujo,
          funcionalidad y comodidad. Con apartamentos modernos y amenidades de primera.
          Stone Towers III es el lugar perfecto para empezar tu nueva vida.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#contacto"
            className="bg-gray-900 text-white rounded-full px-8 py-3.5 text-base font-semibold"
          >
            Solicitar Más Información
          </Link>
          <Link
            href="#about"
            className="bg-[#ecf1f8] text-[#434444] rounded-full px-8 py-3.5 text-base font-semibold"
          >
            Conoce Más
          </Link>
        </div>
      </div>
    </section>
  );
}
