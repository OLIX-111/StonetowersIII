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
    <svg className="w-4 h-4" fill="#fff" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  );
}

export default function Amenities() {
  return (
    <section>
      <div
        className="grid lg:grid-cols-2 items-stretch"
        style={{ minHeight: "560px" }}
      >
        <div className="flex flex-col justify-center px-20 py-20 max-lg:px-10 max-lg:py-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
            Amenidades que Elevan<br />Tu Estilo de Vida
          </h2>
          <ul className="flex flex-col gap-4 list-none">
            {amenities.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg font-medium text-gray-900">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://stonetowers-iii.vercel.app/Torres.jpeg"
            alt="Edificio moderno Stone Towers III con arquitectura contemporánea"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
