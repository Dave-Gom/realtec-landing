import { Mail, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import { inter, sora } from "../theme/fonts";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#22AF52] gap-10 lg:gap-20 px-4 sm:px-8 lg:px-20 py-16 scroll-mt-[10vh]"
    >
      {/* Formulario */}
      <div className="flex flex-col w-full lg:w-[40vw] gap-6 max-w-2xl text-center lg:text-left">
        <h2
          className={`text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white ${sora.className}`}
        >
          Contactanos
        </h2>

        {/* Nombre */}
        <label className="w-full flex flex-col gap-2 text-left">
          <span className="text-white text-lg">Nombre</span>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ACB4C3] w-5 h-5" />
            <input
              type="text"
              className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
              placeholder="Nombre y Apellido"
            />
          </div>
        </label>

        {/* Email */}
        <label className="w-full flex flex-col gap-2 text-left">
          <span className="text-white text-lg">Email</span>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ACB4C3] w-5 h-5" />
            <input
              type="email"
              className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
              placeholder="Ingresa tu email"
            />
          </div>
        </label>

        {/* Mensaje */}
        <label className="w-full flex flex-col gap-2 text-left">
          <span className="text-white text-lg">Mensaje</span>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-[#ACB4C3] w-5 h-5" />
            <textarea
              className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
              placeholder="Escribe tu mensaje"
              rows={4}
            ></textarea>
          </div>
        </label>

        {/* Botón */}
        <button className="bg-white text-[#22AF52] font-semibold px-6 py-3 rounded-[88px] hover:bg-gray-200 transition">
          Enviar consulta
        </button>
      </div>

      {/* Imagen decorativa */}
      <div className="relative flex justify-center lg:justify-end items-center w-full lg:w-auto">
        {/* Líneas decorativas solo visibles en pantallas grandes */}
        <div className="w-10 h-30 border-1 border-[#F4F7FA] mt-80 rounded-[30px] mr-[-15] z-1" />
        <Image
          src="/assets/img/contact.jpg"
          alt="Imagen de contacto"
          width={500}
          height={500}
          className="rounded-[30px] object-cover w-[90%] sm:w-[400px] lg:w-[500px] h-auto border border-[#F4F7FA] shadow-md"
        />
        <div className="w-40 h-10 border-1 border-[#F4F7FA] rounded-[30px] ml-[-170] mt-[-18]" />
      </div>
    </section>
  );
};

export default Contact;
