import React from "react";
import { FEATURES } from "../../constants";

export const FeatureGrid: React.FC = () => {
  return (
    <section className="bg-[#f4f4f5] dark:bg-[#0a0a0a] py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#171717] p-8 rounded-xl shadow-sm border border-border-light dark:border-none flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-dark dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-dark/70 dark:text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};