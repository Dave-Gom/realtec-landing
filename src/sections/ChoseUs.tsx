"use client";

import { Red_Hat_Display, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-red-hat-display",
});

const ChoseUs = () => {
  return (
    <section
      id="chose-us"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#194230] gap-10 px-4 py-10 scroll-mt-[10vh]"
    >
      {/* Primera fila */}
      <div className="flex flex-col lg:flex-row items-center text-white gap-6 lg:gap-8 w-full max-w-[1300px]">
        {/* Izquierda */}
        <div className="flex flex-col justify-center text-left bg-transparent rounded-3xl p-6 sm:p-8 lg:pr-20 lg:p-0 w-full lg:w-1/2 lg:h-[18rem]">
          <h2
            className={`${sora.className} font-semibold text-[32px] sm:text-[40px] lg:text-[55px] text-[#F4F7FA] leading-tight mb-4`}
          >
            ¿Por qué invertir con Realtec?
          </h2>
          <p
            className={`${redHatDisplay.className} text-[16px] sm:text-[18px] lg:text-[20px] font-light text-[#F4F7FA]`}
          >
            Orientación centrada en el cliente, diseñamos soluciones que aportan
            valor a largo plazo para inversores y usuarios. Cada proyecto
            representa una nueva oportunidad de aprendizaje, innovación y
            excelencia para nuestro equipo.
          </p>
        </div>

        {/* Derecha */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 h-auto flex flex-col justify-center w-full lg:w-1/2 lg:h-[18rem]">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3`}
          >
            Respaldo que proyecta futuro
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px]`}
          >
            Realtec nace respaldado por la trayectoria de Tecnoedil, una
            constructora con más de 50 años de experiencia en Paraguay. Su
            dinamismo, capacidad técnica y responsabilidad en obras civiles,
            viales, electromecánicas y portuarias nos otorgan la solidez
            necesaria para proyectar una inmobiliaria a la altura de los mayores
            estándares.
          </p>
        </div>
      </div>

      {/* Segunda fila */}
      <div className="flex flex-col lg:flex-row items-center text-white gap-6 lg:gap-8 w-full max-w-[1300px]">
        {/* Izquierda */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 flex flex-col justify-center w-full lg:w-1/2 lg:h-[18rem]">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3`}
          >
            Creemos en
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px]`}
          >
            Que el verdadero crecimiento patrimonial nace de proyectos con
            visión a largo plazo. Desarrollos que combinan lo industrial, lo
            corporativo y lo mixto para impulsar la economía del Paraguay.
            Nuestro objetivo es crear espacios que no solo se construyen, sino
            que generan valor sostenible para las empresas y el país.
          </p>
        </div>

        {/* Derecha */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 flex flex-col justify-center w-full lg:w-1/2  lg:h-[18rem]">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3`}
          >
            Nuestro Horizonte
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px]`}
          >
            Es consolidarnos como la desarrolladora de referencia en proyectos
            estratégicos que transformen el panorama empresarial de Paraguay.
            Acompañar a los inversionistas en la creación de oportunidades
            sólidas, transparentes y rentables. Paraguay con infraestructura
            moderna, sostenible y diseñada para crecer en conjunto con sus
            protagonistas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;
