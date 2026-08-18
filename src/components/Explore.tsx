const locations = [
  {
    img: "https://www.lromanarealestate.com/stonetowers/explorabayahibe.avif",
    alt: "Playas de Bayahibe",
    name: "Playas de Bayahibe",
    distance: "30 minutos de distancia",
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/explorahilton.avif",
    alt: "Hotel Hilton",
    name: "Hotel Hilton",
    distance: "10 minutos de distancia",
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/exploraestancia.avif",
    alt: "La Estancia Golf Resort",
    name: "La Estancia Golf Resort",
    distance: "15 minutos de distancia",
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/explorakidd.avif",
    alt: "Capitan Kid",
    name: "Capitan Kid",
    distance: "5 minutos de distancia",
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/explorachavon.avif",
    alt: "Altos de Chavón",
    name: "Altos de Chavón",
    distance: "25 minutos de distancia",
  },
  {
    img: "https://www.lromanarealestate.com/stonetowers/exploraavion.avif",
    alt: "Aeropuerto",
    name: "Aeropuerto",
    distance: "15 minutos de distancia",
  },
];

export default function Explore() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Explora Lo Mejor de La Romana a Solo Minutos de Stone Towers III
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {locations.map((loc) => (
            <div key={loc.name} className="relative group overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={loc.img}
                alt={loc.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.01))",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-start p-6">
                <h3 className="text-white text-3xl font-medium mb-1">{loc.name}</h3>
                <p className="text-white/80 text-sm">{loc.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
