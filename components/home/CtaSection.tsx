import React from "react";
import { useNavigate } from "react-router-dom";

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary py-24 text-white">
      <div className="max-w-[960px] mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
          ¿Buscas ser distribuidor autorizado?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Únete a la red más grande de equipamiento industrial en México y obtén beneficios exclusivos de Master Distributor.
        </p>
        <div className="pt-8">
          <button
            className="bg-white text-primary px-10 py-5 rounded-lg text-lg font-black hover:bg-gray-100 transition-colors uppercase tracking-widest shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transform duration-200"
            onClick={() => navigate('/distribuidores')}
          >
            Registrarme como Distribuidor
          </button>
        </div>
      </div>
    </section>
  );
};