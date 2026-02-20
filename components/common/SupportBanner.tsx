import React from "react";
import { Button } from "../ui/Button";

export const SupportBanner: React.FC = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 industrial-grid pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">
            <div className="size-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-2 shadow-inner">
               <span className="material-symbols-outlined text-4xl">support_agent</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-none">
              ¿Necesitas Ayuda de un <br className="hidden md:block"/>
              Ingeniero Experto?
            </h2>
            
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-2xl">
              No permitas que un imprevisto técnico detenga tu operación. Nuestros ingenieros certificados están listos para brindarte soluciones precisas y asistencia inmediata, ya sea vía remota o presencialmente.
            </p>
            
            <div className="pt-6">
               <Button 
                 variant="white" 
                 size="lg" 
                 className="text-primary font-black shadow-xl hover:bg-gray-50 border-none px-8 py-4 h-auto text-base hover:-translate-y-1 transition-transform"
                 icon="chat"
                 onClick={() => window.open('https://wa.me/525599903546', '_blank')}
               >
                 Hablar con Soporte Técnico
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};