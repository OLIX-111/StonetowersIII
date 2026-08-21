"use client";

const VIDEO_ID = "1OeQf_ZfPgY";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 70px)", minHeight: "560px" }}
    >
      {/* YouTube background video */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Stone Towers III"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw",
            minWidth: "177.78vh",
            minHeight: "100%",
            border: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }} />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 2 }}
      >
        <h1
          className="text-white font-bold leading-tight mb-10"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "900px" }}
        >
          Descubre el Hogar<br />Donde Tus Sueños Cobran Vida
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#modelos"
            className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: "#c8e000", color: "#0f1629" }}
          >
            Explorar Modelos
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Solicitar Más Información
          </a>
        </div>
      </div>
    </section>
  );
}
