"use client";

import ProjectCard from "../components/Cards/ProjectCard";
import Carousel from "../components/Carousel";

const projects = [
  {
    imageUrl: "/assets/img/projects/DOT.jpg",
    title: "DOT Sacramento",
    location: "Santísimo Sacramento 2265, Asunción",
    status: "Entregado",
  },
  {
    imageUrl: "/assets/img/projects/industrialPark.jpg",
    title: "Parque Industrial",
    location: "Ciudad de Limpio",
    status: "En Desarrollo",
  },
  {
    imageUrl: "/assets/img/projects/mixedUse.png",
    title: "Proyecto De Usos Mixtos",
    location: "Ciudad de Limpio",
    status: "En Desarrollo",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-[80vh] bg-white flex flex-col justify-center items-center  sm:pb-12 py-20 scroll-mt-[5vh]"
    >
      <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center text-[#22AF52] mb-8 md:mb-12">
        Nuestros Proyectos
      </h2>
      {/* Carousel responsivo */}
      <div className="w-full max-w-[1400px]">
        <Carousel
          data={projects}
          gap={"1rem"}
          contentContainerClassName="px-10 md:px-20"
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
      </div>
    </section>
  );
};

export default Projects;
