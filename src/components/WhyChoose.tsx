const features = [
  {
    title: "Diseño Contemporáneo",
    desc: "Apartamentos modernos con acabados de lujo y distribuciones funcionales.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Ubicación Privilegiada",
    desc: "Cerca de las principales atracciones de La Romana, combinando comodidad y acceso.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Comodidad y Seguridad",
    desc: "Con amenidades como piscina, club privado y seguridad 24/7 para una vida tranquila.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              ¿Por Qué Elegir Stone Towers III?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Stone Towers III no es solo un lugar para vivir, es una experiencia diseñada
              para ofrecerte lo mejor de La Romana. Con una ubicación estratégica, amenidades
              excepcionales y apartamentos de diseño contemporáneo, este proyecto eleva tu
              estilo de vida a un nuevo nivel.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
