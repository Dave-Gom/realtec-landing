import { Inter, Rubik, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

export interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
}

const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  description,
}: TeamMemberCardProps) => {
  return (
    <div
      className={`relative w-[80vw] h-[70vh] md:w-[377px] md:h-[650px] lg:w-[377px] lg:h-[653px] rounded-[16px] flex flex-col border border-[#22AF52] p-6 gap-4 m-auto lg:mb-10 items-center text-center bg-white`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-[50vw] h-[50vw] max-w-[313px] max-h-[280px] object-cover rounded-[12px] transition-transform duration-300 hover:scale-105 mx-auto"
      />
      <h3
        className={`${sora.className} text-[20px] sm:text-[22px] lg:text-[24px] text-[#07090D] mt-4`}
      >
        {name}
      </h3>
      <div className="border-b border-[#22AF52] w-1/2 mb-2" />
      <div>
        <h5
          className={`${inter.className} text-[14px] sm:text-[15px] lg:text-[16px] text-[#22AF52] mb-4 text-start justify-self-start`}
        >
          {position}
        </h5>
        <p
          className={`${rubik.className} text-[14px] sm:text-[15px] text-[#586174] leading-relaxed text-start`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
