import { Rubik, Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

const Introduction = () => {
  return (
    <div className="min-h-[80vh] w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-32 xl:px-40 gap-10 lg:gap-20 py-10">
      {/* Texto */}
      <div className="text-center lg:text-left flex-1">
        <h2
          className={`text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-6 text-[#22AF52] ${sora.className}`}
        >
          Impulsamos el desarrollo urbano que acompaña el crecimiento del país
        </h2>
        <p
          className={`${rubik.className} text-[#A8A8A8] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed`}
        >
          Realtec, la desarrolladora inmobiliaria del Grupo Tecnoedil, donde
          impulsamos el desarrollo urbano que Paraguay necesita. <br />
          <br />
          Desarrollamos proyectos industriales, corporativos y de uso mixto, con
          la convicción de que el verdadero crecimiento se construye en espacios
          funcionales, sostenibles y con visión a largo plazo.
        </p>
        <button
          className={`${rubik.className} font-semibold text-white py-3 px-8 sm:px-10 md:px-12 rounded-[30px] bg-[#194230] text-[14px] sm:text-[16px] mt-8 sm:mt-10`}
        >
          Nuestro Equipo
        </button>
      </div>

      {/* Imagen */}
      <div className="relative flex justify-center lg:justify-end flex-1">
        {/* Línea izquierda */}
        <div className="w-10 h-30 border-1 border-[#22AF52] mt-80 rounded-[30px] mr-[-15] z-1" />

        <Image
          src="/assets/img/intoImage.jpg"
          alt="Introduction Image"
          width={500}
          height={500}
          className="rounded-[30px] object-cover w-[90%] sm:w-[80%] md:w-[60%] lg:w-[500px] lg:h-[500px] border"
        />
        <div className="w-40 h-10 border-1 border-[#22AF52] rounded-[30px] ml-[-170] mt-[-18]" />
      </div>
    </div>
  );
};

export default Introduction;
