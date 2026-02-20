import React from "react";
import { Button } from "../ui/Button";
import { PRODUCT_SPECS, IMAGES } from "../../constants";

export const ProductSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Producto Estrella
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-text-dark dark:text-white">
            Procesador de Alimentos PA-7 PRO
          </h3>
          <div className="w-24 h-1.5 bg-primary mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 space-y-10">
            <div className="space-y-4">
              <p className="text-xl text-text-dark/80 dark:text-white/80 leading-relaxed italic border-l-4 border-gray-200 dark:border-gray-800 pl-6">
                "El estándar de oro para cocinas de alta demanda y producción industrial masiva."
              </p>
            </div>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-6">
              {PRODUCT_SPECS.map((spec) => (
                <div key={spec.label} className="p-4 border-l-4 border-primary bg-background-light dark:bg-[#171717]">
                  <p className="text-xs font-bold opacity-50 uppercase text-text-dark dark:text-white mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold text-text-dark dark:text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              {[
                "7 Discos incluidos para diferentes cortes y rallados.",
                "Sistema de seguridad automático al abrir la tapa.",
                "Diseño higiénico de fácil limpieza sin herramientas."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <p className="text-sm text-text-dark dark:text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('https://wa.me/525599903546', '_blank')}
              >
                Cotizar Ahora
              </Button>
              <Button
                variant="white"
                size="lg"
                icon="description"
                onClick={() => window.open('https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/50PROCESADORDEALIMENTOSPA7PRO_l981yz.png', '_blank')}
              >
                Ficha Técnica
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white dark:bg-[#171717] p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-2xl overflow-hidden">
                {/* CHANGE: This image is defined in src/constants.ts as IMAGES.spotlightProduct */}
                <img
                  src={IMAGES.spotlightProduct}
                  alt="PA-7 PRO Food Processor"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
                  TOP SELLER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};