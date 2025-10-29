"use client";
import { Sora } from "next/font/google";
import TeamMemberCard, {
  TeamMemberCardProps,
} from "../components/Cards/TeamMemberCard";
import Carousel from "../components/Carousel";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const members: TeamMemberCardProps[] = [
  {
    name: "Alvaro Acevedo",
    position: "Gerente de Negocios Inmobiliarios",
    imageUrl: "/assets/img/teamRealtec/alvaroAcevedo.jpg",
    description:
      "Con visión integral, Alvaro impulsa el crecimiento de Realtec articulando finanzas, desarrollo y gestión patrimonial. Su experiencia y enfoque relacional fortalecen nuestra propuesta de transformar activos en oportunidades rentables y fomentar una cultura de crecimiento compartido.",
  },
  {
    name: "Juan Pablo Troche",
    position: "Coordinador de Proyectos",
    imageUrl: "/assets/img/teamRealtec/pabloTroche.jpg",
    description:
      "Ingeniero Civil con Máster en Desarrollo Inmobiliario por IE University. Juan lidera la ejecución de nuestros proyectos industriales, asegurando que cada desarrollo sea técnicamente sólido, financieramente viable y estratégicamente rentable.",
  },
  {
    name: "Lucas Acosta",
    position: "Coordinador de Proyectos",
    description:
      "Lucas lidera el desarrollo de proyectos corporativos y de usos mixtos, desde la concepción hasta la comercialización y administración. Ingeniero industrial con enfoque estratégico, aporta capacidad para estructurar procesos y tecnología que aseguran eficiencia operativa.",
    imageUrl: "/assets/img/teamRealtec/lucasAcosta.jpg",
  },
  {
    name: "Ismael Luizzi",
    position: "Asistente Técnico y Operativo",
    description:
      "Ingeniero industrial con enfoque en gestión patrimonial y análisis de desarrollos. Con su capacidad analítica y de organización, Ismael asegura que cada activo esté listo para generar valor, ya sea a través de su comercialización o desarrollo.",
    imageUrl: "/assets/img/teamRealtec/isamaelLuizzi.jpg",
  },
  {
    name: "Matias Viveros",
    position: "Administración y Contabilidad",
    description:
      "Contador público con experiencia en gestión financiera y administrativa. \nMatías asegura el control contable y la agilidad operativa de Realtec, aportando el rigor necesario para la gestión presupuestaria de los proyectos inmobiliarios.",
    imageUrl: "/assets/img/teamRealtec/matiasViveros.jpg",
  },
  {
    name: "Sarah Stadler",
    position: "Asistente Técnico y Operativo",
    description:
      "Con visión integral, Sarah impulsa el crecimiento de Realtec articulando finanzas, desarrollo y gestión patrimonial. Su experiencia y enfoque relacional fortalecen nuestra propuesta de transformar activos en oportunidades rentables y fomentar una cultura de crecimiento compartido.",
    imageUrl: "/assets/img/teamRealtec/sarahStadler.jpg",
  },
];

const OurTeam = () => {
  return (
    <section
      className=" py-10 w-full min-h-[80vh] bg-white flex flex-col align-middle overflow-hidden scroll-mt-[10vh]"
      id="us"
    >
      <h2
        className={`${sora.className} text-[48px] font-semibold text-center text-[#22AF52] mb-6`}
      >
        Team Realtec
      </h2>
      <Carousel
        contentContainerClassName="px-10 md:px-20 lg:px-40"
        data={members}
        gap={"1rem"}
        continuousScroll
        renderItem={(member, index) => {
          return (
            <TeamMemberCard
              key={member.name + index}
              imageUrl={member.imageUrl}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          );
        }}
      />
    </section>
  );
};

export default OurTeam;
