import { Sora } from "next/font/google";
import IconCard, { IconCardProps } from "../components/Cards/IconCard";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
});

const servicesList: IconCardProps[] = [
  {
    iconUrl: "/assets/img/icons/transformacion.png",
    title: "Transformación con Valor",
  },
  {
    iconUrl: "/assets/img/icons/estrategia.png",
    title: "Estrategia Integral",
  },
  {
    iconUrl: "/assets/img/icons/ejecucion.png",
    title: "Ejecución Profesional",
  },
  {
    iconUrl: "/assets/img/icons/diferenciacion.png",
    title: "Diferenciación Real",
  },
];

const Services = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-[10vh] py-15"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/video/realtecHero.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#19423099]" />

      {/* Contenido */}
      <div className="relative z-20 text-center text-[#F4F7FA] flex flex-col items-center px-4 sm:px-10 lg:px-20">
        <h2
          className={`${sora.className} font-semibold text-[28px] sm:text-[36px] lg:text-[48px] mb-4`}
        >
          Gestión de Desarrollos Inmobiliarios
        </h2>

        <p
          className={`${sora.className} font-light text-[16px] sm:text-[20px] lg:text-[28px] text-[#F4F7FA] max-w-[900px] mx-auto`}
        >
          Transformamos oportunidades en proyectos rentables, con estrategia,
          foco y visión.
        </p>

        {/* Cuadrícula de IconCards */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-6 sm:gap-10 
            mt-10 lg:mt-20 
            w-full max-w-[900px] mx-auto px-4
          "
        >
          {servicesList.map((service, index) => (
            <IconCard
              key={index}
              iconUrl={service.iconUrl}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
