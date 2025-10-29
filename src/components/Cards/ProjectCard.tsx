import { MapPin } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  location: string;
  status: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
  locationProps?: React.HTMLAttributes<HTMLParagraphElement>;
  statusProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-red-hat-display",
});

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  location,
  status,
  containerProps,
  titleProps,
  locationProps,
  statusProps,
}) => {
  return (
    <div
      {...containerProps}
      className={`relative  w-[80vw] h-[55vh] lg:w-[361px] md:w-[300px] lg:h-[516px]  rounded-[20px] overflow-hidden`}
    >
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt={title}
        className="block w-[80vw] h-[55vh] lg:w-[461px] md:w-[350px] lg:h-[576px] object-cover transition-transform duration-300 hover:scale-105 "
      />

      {/* Overlay con texto */}
      <div
        className={`absolute inset-0 bg-black/40 flex flex-col justify-between p-4 ${redHatDisplay.className} font-weight[800]`}
      >
        <h3
          {...titleProps}
          className={`text-white text-xl font-bold mt-[80%] ${
            titleProps?.className ?? ""
          }`}
        >
          {title}
        </h3>
        <div>
          <div className="flex items-center gap-2 mt-1">
            <MapPin size={16} className="text-green-400" />
            <p
              {...locationProps}
              className={`text-white text-sm text-[18px] ${
                locationProps?.className ?? ""
              } ${redHatDisplay.className}`}
            >
              {location}
            </p>
          </div>
          <p
            {...statusProps}
            className={`text-green-400 text-sm font-medium mt-1 ${
              statusProps?.className ?? ""
            } ${redHatDisplay.className}`}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
