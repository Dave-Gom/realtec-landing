const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/realtecHero.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollamos valor,
          <br /> crecemos juntos
        </h1>
      </div>
    </section>
  );
};

export default Hero;
