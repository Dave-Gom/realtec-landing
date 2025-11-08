"use client";

import { useLanguage } from "@/src/traductions/LanguageContext";
import ProjectCard from "../components/Cards/ProjectCard";
import Carousel from "../components/Carousel";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      imageUrl: "/assets/img/projects/DOT.jpg",
      title: t.projects.dotSacramento.title,
      location: t.projects.dotSacramento.location,
      status: t.projects.dotSacramento.status,
    },
    {
      imageUrl: "/assets/img/projects/industrialPark.jpg",
      title: t.projects.industrialPark.title,
      location: t.projects.industrialPark.location,
      status: t.projects.industrialPark.status,
    },
    {
      imageUrl: "/assets/img/projects/mixedUse.png",
      title: t.projects.mixedUse.title,
      location: t.projects.mixedUse.location,
      status: t.projects.mixedUse.status,
    },
  ];

  return (
    <section
      id="projects"
      className=" py-10 w-full min-h-[80vh] bg-white flex flex-col align-middle overflow-hidden scroll-mt-[10vh]"
    >
      <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center text-[#22AF52] mb-8 md:mb-12">
        {t.projects.title}
      </h2>
      {/* Carousel responsivo */}

      <Carousel
        data={projects}
        gap={"1rem"}
        contentContainerClassName="px-10 md:px-20 lg:px-40"
        renderItem={(project, index) => (
          <ProjectCard
            key={project.title + index}
            imageUrl={project.imageUrl}
            title={project.title}
            location={project.location}
            status={project.status}
          />
        )}
      />
    </section>
  );
};

export default Projects;
