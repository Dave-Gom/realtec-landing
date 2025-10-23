"use client";
import { Menu, X } from "lucide-react";
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
const labels = ["INICIO", "PROYECTOS", "NOSOTROS", "CONTÁCTANOS"];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
          { threshold: 0.6 }
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
    <nav className="fixed flex bg-white left-0 right-0 top-0 z-[100] w-auto items-center h-[10vh] px-[15px] py-[7px] shadow-sm">
      {/* Logo */}
      <span>
        <Image
          src="/assets/img/realtec.png"
          alt="Logo"
          className="h-10"
          width={200}
          height={40}
        />
      </span>

      <div className="flex flex-1" />

      {/* Botón menú móvil */}
      <button
        className="md:hidden text-[#22AF52] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú en pantallas grandes */}
      <div className="hidden md:flex items-center gap-2">
        {sections.map((id, index) => (
          <a
            key={id}
            href={`#${id}`}
            className={`mr-2 text-[#22AF52] p-3 px-5 ${rubik.className} ${
              active === id ? selectedBackground : ""
            } hover:bg-[#22AF52] hover:rounded-full hover:text-white`}
          >
            {labels[index]}
          </a>
        ))}
      </div>

      {/* Menú colapsable móvil */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 right-0 bg-white border-t border-gray-200 md:hidden shadow-md">
          <div className="flex flex-col items-center gap-4 py-6">
            {sections.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-[#22AF52] p-3 px-5 text-lg ${
                  rubik.className
                } ${
                  active === id ? selectedBackground : ""
                } hover:bg-[#22AF52] hover:rounded-full hover:text-white transition`}
              >
                {labels[index]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
