const amenities = [
  "Piscina Privada",
  "Gimnasio Equipado",
  "Club Privado",
  "Seguridad Integral 24/7",
  "Gazebo con BBQ",
  "Jardines Tropicales",
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Amenities() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Amenidades que Elevan<br />Tu Estilo de Vida
            </h2>
            <div className="space-y-4">
              {amenities.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-lg text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Torres.jpeg"
              alt="Edificio moderno Stone Towers III con arquitectura contemporánea"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
