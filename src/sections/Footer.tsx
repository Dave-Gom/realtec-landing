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
        <div className="flex flex-row gap-12 text-[#22AF52] text-lg font-medium">
          <a
            href="https://www.instagram.com/realtecpy?igsh=NXB5eGprZ2c5ejNu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/icons/instagram.png"
              alt="footer"
              width={51}
              height={51}
              className="object-cover w-[51] h-auto "
            />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61579405306643"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/icons/facebook.png"
              alt="footer"
              width={51}
              height={51}
              className="object-cover w-[51] h-auto "
            />
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7366937633614180354"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/img/icons/linkedIn.png"
              alt="footer"
              width={51}
              height={51}
              className="object-cover w-[51] h-auto "
            />
          </a>
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
