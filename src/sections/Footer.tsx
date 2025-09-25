import Image from "next/image";
import { sora } from "../theme/fonts";

const Footer = () => {
  return (
    <section
      className="w-full h-[30vh] bg-white flex flex-col justify-center items-center"
      id="partners"
    >
      <div className="flex flex-row justify-between items-center w-full  px-[10vw]">
        <Image
          src="/assets/img/logoCompleto.png"
          alt="footer"
          width={400}
          height={120}
          className="object-cover w-[200px] h-auto "
        />
        <div className="flex flex-row gap-6 text-[#22AF52] text-lg font-medium">
          instagram
        </div>
      </div>
      <line className="border-1 border-[#22AF52] w-[80vw] mt-4" />
      <h2
        className={`${sora.className} text-[24px] text-[#22AF52] font-semibold mt-4`}
      >
        © 2025. Studio M. All rights reserved.
      </h2>
    </section>
  );
};

export default Footer;
