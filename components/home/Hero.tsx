import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { IMAGES } from "../../constants";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex items-center industrial-grid overflow-hidden bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12 py-16 w-full">
        {/* Text Content */}
        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Tu Socio en Maquinaria Gastronómica
            </span>
            <h1 className="text-text-dark dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
              MEQUIPO: Liderazgo en Equipamiento <span className="text-primary">Industrial</span>
            </h1>
            <p className="text-text-dark/70 dark:text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed">
              Contamos con el stock más grande del país y refacciones 100% originales Skymsen para entrega inmediata. Potencia tu cocina con tecnología brasileña de clase mundial.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              icon="trending_up"
              onClick={() => navigate('/distribuidores')}
            >
              Quiero ser Distribuidor
            </Button>

          </div>

          <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
            <div className="flex flex-col">
              <span className="text-xs uppercase font-bold tracking-widest text-text-dark dark:text-white">Garantía</span>
              <span className="text-sm font-medium text-text-dark dark:text-white">100% Original</span>
            </div>
            <div className="w-[1px] h-8 bg-border-light dark:bg-border-dark"></div>
            <div className="flex flex-col">
              <span className="text-xs uppercase font-bold tracking-widest text-text-dark dark:text-white">Soporte</span>
              <span className="text-sm font-medium text-text-dark dark:text-white">Técnico Certificado</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full h-full flex justify-center">
          <div className="relative z-10 w-full aspect-square max-w-[600px]">
            {/* CHANGE: This image is defined in src/constants.ts as IMAGES.heroProduct */}
            <img
              src={IMAGES.heroProduct}
              alt="Professional stainless steel industrial mixer"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};