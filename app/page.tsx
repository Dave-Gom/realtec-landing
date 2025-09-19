import Hero from "@/src/sections/Hero";
import Introduction from "@/src/sections/Introduction";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col  items-center">
        <Hero />
        <Introduction />
      </main>
    </div>
  );
}
