import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const Partners = () => {
  return (
    <section
      id="partners"
      className="px-4 sm:px-8 lg:px-20 pt-16 sm:pt-20 w-full min-h-[40vh] bg-white flex flex-col items-center overflow-hidden scroll-mt-[10vh]"
    >
      <h2
        className={`${sora.className} text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-center text-[#22AF52] mb-6 sm:mb-10`}
      >
        Crecemos juntos
      </h2>

      <div
        className="
          w-full flex flex-wrap justify-center items-center 
          gap-6 sm:gap-10 lg:gap-16
        "
      >
        <img
          src="/assets/img/partners/tecnoedil.png"
          alt="Tecnoedil"
          className="
            block object-contain transition-transform duration-300 
            hover:scale-105
            max-h-[60px] sm:max-h-[80px] lg:max-h-[100px]
            w-auto
          "
        />
        <img
          src="/assets/img/partners/dot.png"
          alt="Dot"
          className="
            block object-contain transition-transform duration-300 
            hover:scale-105
            max-h-[60px] sm:max-h-[80px] lg:max-h-[100px]
            w-auto
          "
        />
        <img
          src="/assets/img/partners/tec.png"
          alt="Tec"
          className="
            block object-contain transition-transform duration-300 
            hover:scale-105
            max-h-[60px] sm:max-h-[80px] lg:max-h-[100px]
            w-auto
          "
        />
      </div>
    </section>
  );
};

export default Partners;
