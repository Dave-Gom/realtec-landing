import { HTMLAttributes } from "react";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

interface StatCardProps {
  textPrimary: string;
  textSecondary: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  primaryTextProps?: HTMLAttributes<HTMLParagraphElement>;
  secondaryTextProps?: HTMLAttributes<HTMLParagraphElement>;
}

const StatCard = ({
  textPrimary,
  textSecondary,
  containerProps,
  primaryTextProps,
  secondaryTextProps,
}: StatCardProps) => {
  return (
    <div
      {...containerProps}
      className={`flex flex-col items-center justify-center p-4 text-white${
        containerProps?.className ?? ""
      }`}
    >
      <p
        {...primaryTextProps}
        className={`${
          sora.className
        } text-[32px] md:text-[48px] lg:text-[64px] font-semibold  sm:text-center  ${
          primaryTextProps?.className ?? ""
        }`}
      >
        {textPrimary}
      </p>
      <p
        {...secondaryTextProps}
        className={`${sora.className} text-[15px] font-semibold ${
          secondaryTextProps?.className ?? ""
        }`}
      >
        {textSecondary}
      </p>
    </div>
  );
};

export default StatCard;
