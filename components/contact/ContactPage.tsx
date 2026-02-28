import React from "react";
import { Button } from "../ui/Button";
import { SEO } from "../common/SEO";

const CONTACT_INFO = [
  {
    icon: "storefront",
    title: "Showroom & Corporativo",
    lines: [
      {
        text: "Av. Presidente Masaryk 61, Int. 901",
        href: "https://maps.google.com/?q=Av.+Pdte.+Masaryk+61+Int.+901+Polanco+Miguel+Hidalgo+CDMX"
      },
      { text: "Col. Polanco V Sección" },
      { text: "Miguel Hidalgo, CDMX" }
    ]
  },
  {
    icon: "call",
    title: "Línea Directa",
    lines: [
      { text: "+52 (55) 99903546", href: "tel:+525599903546" },
      { text: "Lunes a Sábado: 8:00 AM - 5:00 PM" }
    ]
  },
  {
    icon: "mail",
    title: "Departamentos",
    lines: [
      { text: "Ventas: ventas@mequipo.com", href: "mailto:ventas@mequipo.com" },
    ]
  }
];

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white dark:bg-background-dark min-h-screen">
      <SEO
        title="Contacto"
        description="Contáctanos para asesoría en equipamiento industrial, cotizaciones y servicio técnico. Visita nuestro showroom en CDMX."
      />

      {/* Header Section */}
      <section className="bg-background-light dark:bg-black py-16 border-b border-border-light dark:border-border-dark">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
            Atención al Cliente
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-text-dark dark:text-white mb-4 tracking-tight">
            Contacto & <span className="text-primary">Showroom</span>
          </h1>
          <p className="text-xl text-text-dark/60 dark:text-white/60 max-w-2xl leading-relaxed">
            Visita nuestras instalaciones para conocer los equipos en funcionamiento o contacta a nuestros ingenieros para asesoría remota.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              {CONTACT_INFO.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 size-16 bg-background-light dark:bg-[#171717] border border-border-light dark:border-border-dark rounded-xl flex items-center justify-center text-text-dark dark:text-white group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-dark dark:text-white mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.lines.map((line, lineIdx) => (
                        line.href ? (
                          <a
                            key={lineIdx}
                            href={line.href}
                            target={line.href.startsWith("http") ? "_blank" : undefined}
                            rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block text-text-dark/70 dark:text-white/70 font-medium hover:text-primary dark:hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <p key={lineIdx} className="text-text-dark/70 dark:text-white/70 font-medium">
                            {line.text}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="pt-8 border-t border-border-light dark:border-border-dark space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-text-dark/50 dark:text-white/50 mb-4">
                Accesos Rápidos
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                  onClick={() => window.open('https://wa.me/525599903546', '_blank')}
                >
                  <span className="material-symbols-outlined text-2xl">chat</span>
                  Chat por WhatsApp
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Google Maps */}
          <div className="w-full bg-white dark:bg-[#171717] rounded-3xl overflow-hidden border border-border-light dark:border-border-dark shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.6387965014729!2d-99.1842002!3d19.4316159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8acbaa9865f%3A0xaae1fc285d63d780!2sAv.%20Pdte.%20Masaryk%2061-Int.%20901%2C%20Polanco%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2ssv!4v1771596503108!5m2!1ses-419!2ssv"
              style={{ width: '100%', height: '500px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mequipo - Av. Presidente Masaryk 61, CDMX"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};