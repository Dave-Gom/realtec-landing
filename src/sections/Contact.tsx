"use client";
import { useLanguage } from "@/src/traductions/LanguageContext";
import { Mail, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { inter, sora } from "../theme/fonts";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(
      `Hola mi nombre es: ${name}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:lucas.tecnoedil@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#22AF52] gap-10 lg:gap-20 px-4 sm:px-8 lg:px-20 py-16 scroll-mt-[10vh]"
    >
      {/* Formulario */}
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col w-full lg:w-[40vw] gap-6 max-w-2xl text-center lg:text-left">
          <h2
            className={`text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white ${sora.className}`}
          >
            {t.contact.title}
          </h2>

          {/* Nombre */}
          <label className="w-full flex flex-col gap-2 text-left">
            <span className="text-white text-lg">{t.contact.form.name.label}</span>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ACB4C3] w-5 h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
                placeholder={t.contact.form.name.placeholder}
              />
            </div>
          </label>

          {/* Email */}
          <label className="w-full flex flex-col gap-2 text-left">
            <span className="text-white text-lg">{t.contact.form.email.label}</span>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ACB4C3] w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
                placeholder={t.contact.form.email.placeholder}
              />
            </div>
          </label>

          {/* Mensaje */}
          <label className="w-full flex flex-col gap-2 text-left">
            <span className="text-white text-lg">{t.contact.form.message.label}</span>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-[#ACB4C3] w-5 h-5" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full pl-12 pr-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-[#E7EAEE] text-[#333] placeholder:text-[#ACB4C3] ${inter.className}`}
                placeholder={t.contact.form.message.placeholder}
                rows={4}
              ></textarea>
            </div>
          </label>

          {/* Botón */}
          <button
            onClick={handleSendEmail}
            className="bg-white text-[#22AF52] font-semibold px-6 py-3 rounded-[88px] hover:bg-gray-200 transition"
          >
            {t.contact.form.submitButton}
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center  items-center">
        <div className="relative flex justify-center lg:justify-end w-[80vw] h-[85vw] sm:w-[400px] lg:w-[500px] sm:h-[400px] lg:h-[500px]">
          {/* Línea izquierda */}
          <div className="absolute left-[-15px] bottom-[50] w-10 h-30 border-1 border-[#F4F7FA] rounded-[30px] z-1" />
          <Image
            src="/assets/img/contact/contact.png"
            alt="Introduction Image"
            width={500}
            height={500}
            className="rounded-[30px] object-cover w-[80vw] h-[85vw] sm:w-[400px] lg:w-[500px] sm:h-[400px] lg:h-[500px] border border-[#F4F7FA] shadow-md"
          />
          <div className="w-40 h-10 border-1 border-[#F4F7FA] rounded-[30px] absolute top-[-15px] right-[20]" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
