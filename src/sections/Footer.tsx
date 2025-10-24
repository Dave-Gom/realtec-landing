import Image from "next/image";
import { sora } from "../theme/fonts";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-white flex flex-col items-center justify-center py-10 px-6 sm:px-10 lg:px-[10vw]"
    >
      {/* Contenedor principal */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-8">
        {/* Logo */}
        <Image
          src="/assets/img/logoCompleto.png"
          alt="Realtec logo"
          width={400}
          height={120}
          className="object-contain w-[180px] sm:w-[220px] lg:w-[260px] h-auto"
        />

        {/* Redes sociales */}
        <div className="flex flex-row gap-6 sm:gap-10 text-[#22AF52]">
          <a
            href="https://www.instagram.com/realtecpy?igsh=NXB5eGprZ2c5ejNu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/assets/img/icons/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="w-[32px] sm:w-[40px] lg:w-[50px] h-auto hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61579405306643"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image
              src="/assets/img/icons/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="w-[32px] sm:w-[40px] lg:w-[50px] h-auto hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7366937633614180354"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/assets/img/icons/linkedIn.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="w-[32px] sm:w-[40px] lg:w-[50px] h-auto hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="w-full max-w-[90vw] border-t border-[#22AF52] my-6" />

      {/* Texto de derechos */}
      <p
        className={`${sora.className} text-center text-[#22AF52] text-[14px] sm:text-[16px] font-semibold`}
      >
        © 2025. Studio M. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
