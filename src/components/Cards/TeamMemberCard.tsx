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
      className={`relative w-[377px] h-[723px] rounded-[16px] flex flex-col justify-start border-[1px] border-[#22AF52] p-[32px] gap-4 m-auto mb-10`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="block  w-[313px] h-[280px] object-cover transition-transform duration-300 hover:scale-105 rounded-[12px]"
      />
      <h3 className={`${sora.className} text-[24px]  text-[#07090D]`}>
        {name}
      </h3>
      <line className="border-b border-[#22AF52] mb-4" />
      <h5 className={`${inter.className} text-[16px] text-[#22AF52] mb-[28px]`}>
        {position}
      </h5>
      <p className={`${rubik.className} text-[16px] text-[#586174]`}>
        {description}
      </p>
    </div>
  );
};

export default TeamMemberCard;
