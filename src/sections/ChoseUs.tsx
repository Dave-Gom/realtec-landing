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
      className="w-full h-screen flex flex-col items-center justify-center bg-[#194230] gap-8"
      id="chose-us"
    >
      <div className="flex flex-row items-center text-white px-5 text-center gap-8">
        <div className="items-center pr-20 max-w-[624px] rounded-3xl h-[354px] flex flex-col align-middle justify-center text-left">
          <h2
            className={`${sora.className} font-semibold text-[55px] text-[#F4F7FA] leading-tight`}
          >
            ¿Por qué invertir con Realtec?
          </h2>
          <p className={`${redHatDisplay.className} text-[20px] font-thin`}>
            Orientación centrada en el cliente, diseñamos soluciones que aportan
            valor a largo plazo para inversores y usuarios. Cada proyecto
            representa una nueva oportunidad de aprendizaje, innovación y
            excelencia para nuestro equipo.
          </p>
        </div>
        <div className="items-center max-w-[624px] bg-white p-8 px-20 rounded-3xl h-[354px] flex flex-col align-middle justify-center">
          <h3
            className={`${sora.className} font-semibold text-[35px] text-[#22AF52]`}
          >
            Respaldo que proyecta futuro
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[16px]`}
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
      <div className="flex flex-row items-center text-white px-5 text-center gap-8 h-[354px] ">
        <div className="items-center max-w-[624px] h-[354px] bg-white p-8 px-20 rounded-3xl flex flex-col align-middle justify-center">
          <h3
            className={`${sora.className} font-semibold text-[35px] text-[#22AF52]`}
          >
            Creemos en
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[16px]`}
          >
            Que el verdadero crecimiento patrimonial nace de proyectos con
            visión a largo plazo. Desarrollos que combinan lo industrial, lo
            corporativo y lo mixto para impulsar la economía del Paraguay.
            Nuestro objetivo es crear espacios que no solo se construyen, sino
            que generan valor sostenible para las empresas y el país.
          </p>
        </div>
        <div className="items-center  max-w-[624px] bg-white p-8 px-20 rounded-3xl h-[354px] flex flex-col align-middle justify-center">
          <h3
            className={`${sora.className} font-semibold text-[35px] text-[#22AF52]`}
          >
            Nuestro Horizonte
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[16px]`}
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
