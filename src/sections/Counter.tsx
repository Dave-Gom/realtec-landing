import StatCard from "../components/Cards/StatCard";

const Counter = () => {
  return (
    <div
      className={`w-full h-[20vh] bg-[#22AF52] flex items-center justify-around text-white text-2xl font-bold`}
    >
      <StatCard textPrimary="USD X" textSecondary="Inversión en desarrollo" />
      <StatCard textPrimary="Has. X" textSecondary="Superficie en desarrollo" />
      <StatCard textPrimary="100%" textSecondary="Éxito comercial" />
      <StatCard textPrimary="3" textSecondary="Pipeline de desarrollo" />
    </div>
  );
};

export default Counter;
