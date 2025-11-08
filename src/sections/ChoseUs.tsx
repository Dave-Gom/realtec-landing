"use client";

import { useLanguage } from "@/src/traductions/LanguageContext";
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
  const { t } = useLanguage();

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
            {t.choseUs.title}
          </h2>
          <p
            className={`${redHatDisplay.className} text-[16px] sm:text-[18px] lg:text-[20px] font-light text-[#F4F7FA]`}
          >
            {t.choseUs.description}
          </p>
        </div>

        {/* Derecha */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 h-auto flex flex-col justify-center w-full lg:w-1/2 lg:h-[18rem] ">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3 text-center`}
          >
            {t.choseUs.cards.backup.title}
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px] text-center`}
          >
            {t.choseUs.cards.backup.description}
          </p>
        </div>
      </div>

      {/* Segunda fila */}
      <div className="flex flex-col lg:flex-row items-center text-white gap-6 lg:gap-8 w-full max-w-[1300px]">
        {/* Izquierda */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 flex flex-col justify-center w-full lg:w-1/2 lg:h-[18rem]">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3 text-center`}
          >
            {t.choseUs.cards.believe.title}
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px] text-center`}
          >
            {t.choseUs.cards.believe.description}
          </p>
        </div>

        {/* Derecha */}
        <div className="bg-white text-left rounded-3xl p-6 sm:p-8 lg:px-20 flex flex-col justify-center w-full lg:w-1/2  lg:h-[18rem]">
          <h3
            className={`${sora.className} font-semibold text-[24px] sm:text-[28px] lg:text-[35px] text-[#22AF52] mb-3 text-center`}
          >
            {t.choseUs.cards.horizon.title}
          </h3>
          <p
            className={`${redHatDisplay.className} text-[#949494] text-[14px] sm:text-[15px] lg:text-[16px] text-center`}
          >
            {t.choseUs.cards.horizon.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;
