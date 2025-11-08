"use client";

import { useLanguage } from "@/src/traductions/LanguageContext";
import StatCard from "../components/Cards/StatCard";

const Counter = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-[20vh] bg-[#22AF52] flex flex-col md:flex-row items-center justify-center sm:justify-around text-white font-bold text-lg sm:text-xl md:text-2xl gap-6 md:gap-0 py-10 sm:py-0 scroll-mt-[10vh]">
      <StatCard
        textPrimary={t.counter.investment.primary}
        textSecondary={t.counter.investment.secondary}
      />
      <StatCard
        textPrimary={t.counter.projects.primary}
        textSecondary={t.counter.projects.secondary}
      />
      <StatCard
        textPrimary={t.counter.surface.primary}
        textSecondary={t.counter.surface.secondary}
      />
    </div>
  );
};

export default Counter;
