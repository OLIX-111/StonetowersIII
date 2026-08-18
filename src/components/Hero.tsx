export default function Hero() {
  return (
    <section className="pt-[70px]">
      <div className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Descubre la Vida que Mereces en{" "}
            <span className="block mt-2">Stone Towers III</span>
          </h1>
        </div>
      </div>
      <div className="relative w-full h-[560px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.lromanarealestate.com/home/hero-image.jpeg"
          alt="Vista panorámica costera de Stone Towers III con aguas turquesas"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
