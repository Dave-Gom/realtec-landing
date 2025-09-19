import Counter from "@/src/sections/Counter";
import Hero from "@/src/sections/Hero";
import Introduction from "@/src/sections/Introduction";
import Projects from "@/src/sections/Projects";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col  items-center">
        <Hero />
        <Introduction />
        <Counter />
        <Projects />
      </main>
    </div>
  );
}
