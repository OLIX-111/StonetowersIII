import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[480px]">
            <Image
              src="https://www.lromanarealestate.com/stonetowers/foto1.avif"
              alt="Vista aérea de Stone Towers III en La Romana"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-sm shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Vive Innovación, Lujo y Conexión en Stone Towers III
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stone Towers III es más que un complejo residencial; es una comunidad diseñada
              para quienes valoran el lujo, la exclusividad y la modernidad. Este proyecto se
              compone de 5 torres de 3 niveles, con un total de 51 apartamentos que reflejan
              un diseño contemporáneo, funcionalidad y confort en cada detalle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ubicado estratégicamente en La Romana, Stone Towers III ofrece la oportunidad
              de vivir cerca de las mejores atracciones de la región, mientras disfrutas de
              un entorno tranquilo y seguro. Este proyecto combina lo mejor del diseño
              residencial con amenidades excepcionales que elevan tu estilo de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
