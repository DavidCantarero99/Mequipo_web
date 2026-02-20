import React, { useEffect } from "react";
import { SEO } from "../common/SEO";

const BenefitItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <h3 className="font-bold text-lg text-text-dark dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-text-dark/70 dark:text-white/70 leading-relaxed max-w-sm">
        {desc}
      </p>
    </div>
  </div>
);

export const DistributorsPage: React.FC = () => {

  useEffect(() => {
    try {
      const f = document.createElement("iframe");
      let ifrmSrc = 'https://forms.zohopublic.com/bneproductsandservicessderl1/form/Formulariopaginaweb/formperma/9l-2Po5l1BQZ8ndhFpC_uy7VbLZx7gkWX3TkYZpGOWA?zf_rszfm=1';

      // UTM Parameter Logic (adapted from provided script)
      try {
        // @ts-ignore
        if (typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined") {
          // @ts-ignore
          for (var prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            // @ts-ignore
            utmPm = (ZFAdvLead.isSameDomian && (ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
            // @ts-ignore
            var utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal !== "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                }
              }
            }
          }
        }
        // @ts-ignore
        if (typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined") {
          // @ts-ignore
          for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            var utmPm = ZFLead.utmPNameArr[prmIdx];
            // @ts-ignore
            var utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal !== "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal; //No I18N
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal; //No I18N
                }
              }
            }
          }
        }
      } catch (e) { }

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "835px";
      f.style.width = "100%"; // Changed from 90% to 100% to match container width preference
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", 'Contáctanos');
      f.scrolling = "no"; // Keep scrolling="no" preference
      f.style.overflow = "hidden";

      const d = document.getElementById("zf_div_9l-2Po5l1BQZ8ndhFpC_uy7VbLZx7gkWX3TkYZpGOWA");
      if (d) {
        d.innerHTML = ''; // Prevent duplicates on remount
        d.appendChild(f);
      }

      const handleMessage = (event: MessageEvent) => {
        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            const iframe = document.getElementById("zf_div_9l-2Po5l1BQZ8ndhFpC_uy7VbLZx7gkWX3TkYZpGOWA")?.getElementsByTagName("iframe")[0];

            if (iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length === 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }

              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(function () {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };

      window.addEventListener('message', handleMessage, false);

      return () => {
        window.removeEventListener('message', handleMessage);
      };

    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark animate-fade-in relative overflow-hidden">
      <SEO
        title="Distribuidores"
        description="Únete a la red de distribuidores autorizados Skymsen. Accede a precios especiales, soporte técnico y refacciones originales."
      />
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#f4f4f5] dark:bg-black industrial-grid -z-0"></div>
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-white dark:from-background-dark to-transparent lg:hidden z-0"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block bg-gradient-to-r from-white dark:from-background-dark to-transparent z-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Copy & Benefits */}
          <div className="space-y-10 py-4 lg:py-0 bg-white/80 dark:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-2xl lg:rounded-none p-6 lg:p-0">
            <div>
              <span className="inline-block py-1.5 px-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6 shadow-lg shadow-primary/20">
                Asociate
              </span>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-text-dark dark:text-white mb-6 leading-[1.1]">
                Únete a la red <br />
                <span className="text-primary relative inline-block mr-3">
                  más fuerte
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
                del país.
              </h1>
              <p className="text-lg lg:text-xl text-text-dark/70 dark:text-white/70 leading-relaxed max-w-lg">
                Conviértete en distribuidor autorizado Skymsen y accede a un ecosistema de negocios diseñado para maximizar tu rentabilidad.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <BenefitItem
                icon="partner_exchange"
                title="Socio Estratégico"
                desc="No solo vendes un producto — te conviertes en el aliado de confianza que tus clientes necesitan en equipamiento industrial."
              />
              <BenefitItem
                icon="shield"
                title="Producto 100% Original"
                desc="Cada equipo y refacción que distribuyes cuenta con la garantía y trazabilidad directa de fábrica Skymsen."
              />
              <BenefitItem
                icon="military_tech"
                title="Marca de Prestigio"
                desc="Representa una marca con más de 60 años de trayectoria en equipamiento industrial para food service."
              />
            </div>
          </div>

          {/* Right Column: Zoho Form Container */}
          <div className="relative w-full flex justify-center">
            <div className="w-full bg-white dark:bg-[#171717] rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden relative z-10 transition-all duration-300">
              {/* Container for Dynamic Zoho Form */}
              <div id="zf_div_9l-2Po5l1BQZ8ndhFpC_uy7VbLZx7gkWX3TkYZpGOWA" className="w-full"></div>
            </div>

            {/* Decorative Elements around card */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          </div>

        </div>
      </div>
    </div>
  );
};