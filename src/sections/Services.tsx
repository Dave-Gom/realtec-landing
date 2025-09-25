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
    title: "EjecuciónProfesional",
  },
  {
    iconUrl: "/assets/img/icons/diferenciacion.png",
    title: "Diferenciación real",
  },
];

const Services = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="hero"
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

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#19423099]" />
      <div className="relative z-20 text-center text-[#F4F7FA]">
        <h2 className={`text-[48px] font-SemiBold mb-4 ${sora.className}`}>
          Gestión de Desarrollos Inmobiliarios
        </h2>
        <p
          className={`text-[32px] ${sora.className} text-[#F4F7FA] font-light text-center mx-20`}
        >
          Transformamos oportunidades en proyectos rentables, con estrategia,
          foco y visión.
        </p>
        <div className="ml-10 flex flex-row gap-10 mt-20">
          {servicesList.map((service, index) => (
            <IconCard
              iconUrl={service.iconUrl}
              title={service.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
