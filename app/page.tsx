import ChoseUs from "@/src/sections/ChoseUs";
import Contact from "@/src/sections/Contact";
import Counter from "@/src/sections/Counter";
import Hero from "@/src/sections/Hero";
import Introduction from "@/src/sections/Introduction";
import OurTeam from "@/src/sections/OurTeam";
import Partners from "@/src/sections/Partners";
import Projects from "@/src/sections/Projects";
import Services from "@/src/sections/Services";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col  items-center">
        <Hero />
        <Introduction />
        <Counter />
        <Projects />
        <ChoseUs />
        <OurTeam />
        <Services />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}
