"use client";

import { useState, useEffect, useCallback } from "react";

const carouselImages = [
  { src: "https://www.lromanarealestate.com/stonetowers/carrusel1.avif", alt: "Stone Towers III 1" },
  { src: "/cocinanueva.png", alt: "Stone Towers III cocina" },
  { src: "https://www.lromanarealestate.com/stonetowers/carrusel3.avif", alt: "Stone Towers III 3" },
  { src: "https://www.lromanarealestate.com/stonetowers/carrusel4.avif", alt: "Stone Towers III 4" },
  { src: "https://www.lromanarealestate.com/stonetowers/carrusel5.avif", alt: "Stone Towers III 5" },
];

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:border-[#1b5db8] bg-white";

export default function Contact() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + carouselImages.length) % carouselImages.length));
  }, []);

  const lightboxNext = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % carouselImages.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, lightboxPrev, lightboxNext]);

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          {/* Prev */}
          <button
            className="absolute left-4 z-10 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] w-full px-16" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={carouselImages[lightbox].src}
              alt={carouselImages[lightbox].alt}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
            <p className="text-white/60 text-center text-sm mt-3">
              {lightbox + 1} / {carouselImages.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 z-10 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <section id="contacto" className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
            ¿Listo para Hacer de Stone Towers III Tu Nuevo Hogar?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: info + form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Estamos aquí para resolver todas tus dudas y ayudarte a encontrar el apartamento
                  perfecto en Stone Towers III. Contáctanos hoy mismo y comienza a vivir la
                  experiencia que mereces.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-900"><span className="font-medium">Teléfono:</span> +1 (484) 473-1113</p>
                  <p className="text-gray-900"><span className="font-medium">Correo Electrónico:</span> info@lromanarealestate.com</p>
                  <p className="text-gray-900"><span className="font-medium">Dirección:</span> Reparto Torres Calle 4ta #5, La Romana, República Dominicana.</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                      <input type="text" placeholder="Tu nombre" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input type="tel" placeholder="+123 456 789 00" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                    <input type="email" placeholder="test@gmail.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea
                      placeholder="Explain it in details..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white rounded-full px-8 py-4 text-base font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
                  >
                    Enviar mi mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Right: carousel */}
            <div className="relative">
              <div className="relative h-[600px] lg:h-[700px] rounded-lg shadow-lg overflow-hidden">
                {carouselImages.map((img, i) => (
                  <div
                    key={img.src}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: i === current ? 1 : 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover cursor-zoom-in"
                      onClick={() => setLightbox(i)}
                    />
                  </div>
                ))}
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === current ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
