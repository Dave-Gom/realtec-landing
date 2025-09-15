import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

const selectedBackground =
  "border-2 border-green-500 bg-green-400/30 rounded-full shadow-md transition hover:bg-green-500 hover:border-green-600";

const Navbar = () => {
  return (
    <nav className="fixed flex bg-transparent px-15 py-7 m-2 left-0 right-0 top-0 z-10 w-auto items-center">
      <span>
        <Image
          src="/assets/img/realtec.png"
          alt="Logo"
          className="h-10"
          width={200}
          height={40}
          objectFit="cover"
        />
      </span>
      <div className="flex flex-1"></div>
      <a
        href="#hero"
        className={`mr-2 text-white p-3 px-5 ${rubik.className} ${selectedBackground}`}
      >
        INICIO
      </a>
      <a
        href="#about"
        className={`mr-2 text-white p-3 px-5 ${rubik.className}`}
      >
        NOSOTROS
      </a>
      <a
        href="#projects"
        className={`mr-2 text-white p-3 px-5 ${rubik.className}`}
      >
        PROYECTOS
      </a>
      <a
        href="#contact"
        className={`mr-2 text-white p-3 px-5 ${rubik.className}`}
      >
        CONTÁCTANOS
      </a>
    </nav>
  );
};

export default Navbar;
