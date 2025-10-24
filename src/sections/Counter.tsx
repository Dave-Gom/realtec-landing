import StatCard from "../components/Cards/StatCard";

const Counter = () => {
  return (
    <div className="w-full min-h-[20vh] bg-[#22AF52] flex flex-col md:flex-row items-center justify-center sm:justify-around text-white font-bold text-lg sm:text-xl md:text-2xl gap-6 md:gap-0 py-10 sm:py-0 scroll-mt-[10vh]">
      <StatCard
        textPrimary="USD 18 millones"
        textSecondary="Inversión en desarrollo"
      />
      <StatCard
        textPrimary="3 Proyectos"
        textSecondary="Pipeline de desarrollo"
      />
      <StatCard
        textPrimary="20.000 m²"
        textSecondary="Superficie en desarrollo"
      />
    </div>
  );
};

export default Counter;
