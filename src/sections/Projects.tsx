"use client";

import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";

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
      className="p-4 w-full min-h-[80vh] bg-white flex flex-col align-middle justify-center"
      id="projects"
    >
      <h2 className="text-[48px] font-bold text-center text-[#22AF52] mb-6">
        Nuestros Proyectos
      </h2>
      <Carousel
        data={projects}
        gap={"1rem"}
        renderItem={(project, index) => {
          return (
            <ProjectCard
              key={project.title + index}
              imageUrl={project.imageUrl}
              title={project.title}
              location={project.location}
              status={project.status}
            />
          );
        }}
      />
    </section>
  );
};

export default Projects;
