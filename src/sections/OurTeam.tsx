"use client";
import { useLanguage } from "@/src/traductions/LanguageContext";
import { Sora } from "next/font/google";
import { useMemo } from "react";
import TeamMemberCard, {
  TeamMemberCardProps,
} from "../components/Cards/TeamMemberCard";
import Carousel from "../components/Carousel";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const OurTeam = () => {
  const { t } = useLanguage();

  const members: TeamMemberCardProps[] = useMemo(
    () => [
      {
        name: t.ourTeam.members.alvaroAcevedo.name,
        position: t.ourTeam.members.alvaroAcevedo.position,
        imageUrl: "/assets/img/teamRealtec/alvaroAcevedo.jpg",
        description: t.ourTeam.members.alvaroAcevedo.description,
      },
      {
        name: t.ourTeam.members.juanPabloTroche.name,
        position: t.ourTeam.members.juanPabloTroche.position,
        imageUrl: "/assets/img/teamRealtec/pabloTroche.jpg",
        description: t.ourTeam.members.juanPabloTroche.description,
      },
      {
        name: t.ourTeam.members.lucasAcosta.name,
        position: t.ourTeam.members.lucasAcosta.position,
        description: t.ourTeam.members.lucasAcosta.description,
        imageUrl: "/assets/img/teamRealtec/lucasAcosta.jpg",
      },
      {
        name: t.ourTeam.members.ismaelLuizzi.name,
        position: t.ourTeam.members.ismaelLuizzi.position,
        description: t.ourTeam.members.ismaelLuizzi.description,
        imageUrl: "/assets/img/teamRealtec/isamaelLuizzi.jpg",
      },
      {
        name: t.ourTeam.members.matiasViveros.name,
        position: t.ourTeam.members.matiasViveros.position,
        description: t.ourTeam.members.matiasViveros.description,
        imageUrl: "/assets/img/teamRealtec/matiasViveros.jpg",
      },
      {
        name: t.ourTeam.members.sarahStadler.name,
        position: t.ourTeam.members.sarahStadler.position,
        description: t.ourTeam.members.sarahStadler.description,
        imageUrl: "/assets/img/teamRealtec/sarahStadler.jpg",
      },
    ],
    [t]
  );

  return (
    <section
      className=" py-10 w-full min-h-[80vh] bg-white flex flex-col align-middle overflow-hidden scroll-mt-[10vh]"
      id="us"
    >
      <h2
        className={`${sora.className} text-[48px] font-semibold text-center text-[#22AF52] mb-6`}
      >
        {t.ourTeam.title}
      </h2>
      <Carousel
        contentContainerClassName="px-10 md:px-20 lg:px-40"
        data={members}
        gap={"1rem"}
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
