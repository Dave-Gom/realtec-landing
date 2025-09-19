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
    <div className="h-[80vh] w-full bg-white flex flex-row  items-center px-[10rem] justify-between gap-20 ">
      <div>
        <h2
          className={`text-[32px] font-bold mb-6 text-[#22AF52]  ${sora.className}`}
        >
          Impulsamos el desarrollo urbano que acompaña el crecimiento del país
        </h2>
        <p className={`${rubik.className} text-[#A8A8A8] text-[18px]`}>
          Realtec, la desarrolladora inmobiliaria del Grupo Tecnoedil, donde
          impulsamos el desarrollo urbano que Paraguay necesita. <br />
          <br />
          Desarrollamos proyectos industriales, corporativos y de uso mixto, con
          la convicción de que el verdadero crecimiento se construye en espacios
          funcionales, sostenibles y con visión a largo plazo.
        </p>
        <button
          className={`${rubik.className} font-semibold text-white py-3 px-12 rounded-[30px] bg-[#194230] text-[16px] mt-10`}
        >
          Nuestro Equipo
        </button>
      </div>
      <div className="flex flex-row">
        <div className="w-10 h-30 border-1 border-[#22AF52] mt-80 rounded-[30px] mr-[-15] z-1" />
        <Image
          src="/assets/img/intoImage.jpg"
          alt="Introduction Image"
          width={500}
          height={500}
          className="rounded-[30px] object-cover border-1 min-w-[500px] min-h-[500px]"
        />
        <div className="w-40 h-10 border-1 border-[#22AF52] rounded-[30px] ml-[-170] mt-[-18]" />
      </div>
    </div>
  );
};

export default Introduction;
