import React, { useState } from "react";
import { Button } from "../ui/Button";
import { SupportBanner } from "../common/SupportBanner";
import { SEO } from "../common/SEO";

const BENEFITS = [
  {
    icon: "all_inclusive",
    title: "Piezas Originales",
    description: "Solo utilizamos refacciones originales Skymsen para asegurar el rendimiento de fábrica."
  },
  {
    icon: "precision_manufacturing",
    title: "Refacciones Garantizadas",
    description: "Stock permanente de las piezas más demandadas con envío inmediato a todo México."
  },
  {
    icon: "update",
    title: "Vida Útil Extendida",
    description: "Nuestros programas de mantenimiento pueden duplicar la vida productiva de tu equipo."
  }
];

export const MaintenancePage: React.FC = () => {
  return (
    <div className="animate-fade-in w-full">
      <SEO
        title="Mantenimiento y Refacciones"
        description="Servicio técnico especializado y refacciones originales para equipos Skymsen. Prolonga la vida útil de tu inversión."
      />

      {/* Hero Section */}
      <section className="bg-background-dark text-white py-20 lg:py-24 relative overflow-hidden industrial-grid">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primary-light border border-primary/20 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Soporte & Post-Venta
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
              Ingeniería <span className="text-primary">No Desechable</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Tus equipos Skymsen están diseñados para durar décadas. Accede a nuestros recursos técnicos y maximiza la vida útil de tu inversión.
            </p>
          </div>
        </div>
        {/* Abstract shapes/glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-white dark:bg-black border-b border-border-light dark:border-border-dark">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-background-light dark:bg-[#171717] border border-border-light dark:border-border-dark">
                <div className="p-3 bg-white dark:bg-[#262626] rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-dark dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-dark/70 dark:text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-light dark:bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-text-dark dark:text-white tracking-tight mb-2">Preguntas Frecuentes</h2>
              <p className="text-text-dark/60 dark:text-white/60">Resuelve tus dudas sobre el cuidado de tus equipos.</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon="chat"
              onClick={() => window.open('https://wa.me/525599903546', '_blank')}
            >
              Contactar a un experto
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "¿Con qué frecuencia debo afilar las cuchillas?",
                a: "Depende del uso, pero recomendamos revisarlas mensualmente. Si notas que el corte pierde precisión o el producto se magulla, es momento de afilarlas o reemplazarlas."
              },
              {
                q: "¿Cómo valido mi garantía?",
                a: "Solo necesitas tu factura de compra y contactarnos. Como Master Distributor, gestionamos tu garantía directamente con fábrica para darte respuesta inmediata."
              },
              {
                q: "¿Qué tipo de lubricante debo usar?",
                a: "Utiliza únicamente lubricantes grado alimenticio (food-grade) para asegurar la inocuidad de tus alimentos y proteger los componentes internos."
              },
              {
                q: "¿Por qué mi equipo se detiene repentinamente?",
                a: "La mayoría de nuestros equipos cuentan con sensores de seguridad. Verifica que la tapa esté bien cerrada y que no haya obstrucciones. Si persiste, contáctanos."
              },
              {
                q: "¿Tienen refacciones para modelos antiguos?",
                a: "Sí, mantenemos un stock activo de refacciones incluso para modelos descontinuados. Envíanos el modelo y número de serie para verificar disponibilidad."
              },
              {
                q: "¿Realizan visitas técnicas a domicilio?",
                a: "Contamos con una red de técnicos certificados en las principales ciudades del país. Para zonas remotas, ofrecemos asistencia guiada por videollamada."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-[#171717] p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group">
                <h3 className="font-bold text-lg text-text-dark dark:text-white mb-3 flex items-start gap-3">
                  <span className="text-primary mt-1 material-symbols-outlined">help</span>
                  {faq.q}
                </h3>
                <p className="text-text-dark/70 dark:text-white/70 leading-relaxed pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SupportBanner />
    </div>
  );
};