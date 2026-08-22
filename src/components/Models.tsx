const properties = [
  {
    img: "https://www.lromanarealestate.com/stonetowers/propiedad1.avif",
    alt: "Plano del Stone Towers Apartamento A1.1",
    name: "Stone Towers Apartamento A1.1",
    beds: 1, baths: 1, sqm: 70,
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/propiedad3.avif",
    alt: "Plano del Stone Towers Apartamento A1.2",
    name: "Stone Towers Apartamento A1.2",
    beds: 1, baths: 1, sqm: 70,
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/propiedad2.avif",
    alt: "Plano del Stone Towers Apartamento A1.3",
    name: "Stone Towers Apartamento A1.3",
    beds: 2, baths: 2, sqm: 90,
  },
];

function BedIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v5a1 1 0 001 1h16a1 1 0 001-1v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V8M15 10V8" />
    </svg>
  );
}
function BathIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h2v8M4 12v5a2 2 0 002 2h12a2 2 0 002-2v-5" />
    </svg>
  );
}
function SizeIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Models() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#ecf1f8] text-[#434444] px-4 py-2 rounded-full font-medium mb-4">
          Modelos del proyecto
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 max-w-4xl mx-auto">
          Apartamentos Modernos con Diseños Funcionales y Espacios Versátiles
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div
            key={p.name}
            className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.alt} className="w-full rounded-2xl h-64 object-cover" />
              <div className="absolute top-4 left-4 bg-[#13223a] text-white px-3 py-1 rounded-full text-sm font-medium">
                En venta
              </div>
            </div>
            <div className="p-4">
              <div className="py-2 inline-block mb-2">
                <p className="font-semibold text-base flex items-center gap-1">
                  <span className="bg-gray-900 text-white rounded-full px-3 py-1 text-sm">USD $</span>
                  1,000 Para Reservar
                </p>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">{p.name}</h4>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"><BedIcon /> {p.beds}</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"><BathIcon /> {p.baths}</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"><SizeIcon /> {p.sqm} m²</span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1"><PinIcon /> La Romana</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
