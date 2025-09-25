"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

const selectedBackground = "bg-[#22AF52] text-white rounded-full transition";

const sections = ["hero", "projects", "us", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");

  console.log(active);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(id);
              }
            });
          },
          { threshold: 0.6 } // 60% visible para marcar activo
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className="fixed flex bg-white px-15 py-7 left-0 right-0 top-0 z-100 w-auto items-center h-10vh">
      <span>
        <Image
          src="/assets/img/realtec.png"
          alt="Logo"
          className="h-10"
          width={200}
          height={40}
        />
      </span>
      <div className="flex flex-1"></div>
      {sections.map((id, index) => {
        const labels = ["INICIO", "PROYECTOS", "NOSOTROS", "CONTÁCTANOS"];
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`mr-2 text-[#22AF52] p-3 px-5 ${rubik.className} ${
              active === id ? selectedBackground : ""
            } hover:bg-[#22AF52] hover:rounded-full hover:text-white`}
          >
            {labels[index]}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
