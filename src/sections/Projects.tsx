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
    <section className="p-4 w-full min-h-[80vh] bg-white">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Nuestros Proyectos
      </h2>
      <Carousel
        data={projects}
        autoPlay={false}
        fullViewItem={false} // Enable multi-item view like FlatList
        continuousScroll={true} // Enable smooth dragging
        className="rounded-xl"
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
