import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const Partners = () => {
  return (
    <section
      className="p-4 w-full min-h-[40vh] bg-white flex flex-col align-middle overflow-hidden"
      id="partners"
    >
      <h2
        className={`${sora.className} text-[48px] font-semibold text-center text-[#22AF52] mb-6`}
      >
        Crecemos juntos
      </h2>
      <div className="w-full flex justify-center items-center gap-10 flex-wrap">
        <img
          src="/assets/img/partners/tecnoedil.png"
          alt="tecnoedil"
          className="block max-h-[100px] w-auto object-contain transition-transform duration-300 "
        />
        <img
          src="/assets/img/partners/dot.png"
          alt="tecnoedil"
          className="block max-h-[100px] w-auto object-contain transition-transform duration-300 "
        />
        <img
          src="/assets/img/partners/tec.png"
          alt="tecnoedil"
          className="block max-h-[100px] w-auto object-contain transition-transform duration-300 "
        />
      </div>
    </section>
  );
};

export default Partners;
