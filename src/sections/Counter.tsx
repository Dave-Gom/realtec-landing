import StatCard from "../components/Cards/StatCard";

const Counter = () => {
  return (
    <div className="w-full min-h-[20vh] bg-[#22AF52] flex flex-col md:flex-row items-center justify-center sm:justify-around text-white font-bold text-lg sm:text-xl md:text-2xl gap-6 md:gap-0 py-10 sm:py-0 scroll-mt-[10vh]">
      <StatCard textPrimary="USD X" textSecondary="Inversión en desarrollo" />
      <StatCard textPrimary="Has. X" textSecondary="Superficie en desarrollo" />
      <StatCard textPrimary="100%" textSecondary="Éxito comercial" />
      <StatCard textPrimary="3" textSecondary="Pipeline de desarrollo" />
    </div>
  );
};

export default Counter;
