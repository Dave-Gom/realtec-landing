import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/video/realtecHeroV2.mp4"
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
        <h1
          className={`text-[72px] font-bold mb-4 ${sora.className} drop-shadow-lg`}
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.8)" }}
        >
          Desarrollamos valor,
          <br /> crecemos juntos
        </h1>
      </div>
    </section>
  );
};

export default Hero;
