import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
});

export interface IconCardProps {
  iconUrl?: string;
  title?: string;
}

const IconCard = ({ iconUrl, title }: IconCardProps) => {
  return (
    <div className="rounded-[2rem] bg-[#F7F6FB] w-[40vw] h-[40vw] md:w-[326px] md:h-[298px] p-4 md:p-10 flex flex-col">
      <div className="flex flex-col justify-center items-center bg-white w-[100px] h-[100px] rounded-[1rem] mb-6">
        <img
          src={iconUrl}
          alt="Icon"
          className="w-[45px] h-[45px] md:w-[90px] md:h-[90px]"
        />
      </div>
      <p
        className={`text-[18px] md:text-[25px] text-[#22AF52] ${sora.className} text-left`}
      >
        {title}
      </p>
    </div>
  );
};

export default IconCard;
