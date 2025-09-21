import { MapPin } from "lucide-react";
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
      className={`relative min-w-[461px] min-h-[576px] rounded-[20px] overflow-hidden `}
    >
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt={title}
        className="block  w-[461px] h-[576px] object-cover transition-transform duration-300 hover:scale-105 "
      />

      {/* Overlay con texto */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
        <h3
          {...titleProps}
          className={`text-white text-xl font-bold ${
            titleProps?.className ?? ""
          }`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <MapPin size={16} className="text-green-400" />
          <p
            {...locationProps}
            className={`text-white text-sm ${locationProps?.className ?? ""}`}
          >
            {location}
          </p>
        </div>
        <p
          {...statusProps}
          className={`text-green-400 text-sm font-medium mt-1 ${
            statusProps?.className ?? ""
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
