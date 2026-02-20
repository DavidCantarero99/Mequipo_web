import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Helper to map labels to paths
  const getPath = (label: string) => {
    switch (label) {
      case "Inicio": return "/";
      case "Productos": return "/productos";
      case "Distribuidores": return "/distribuidores";
      case "Mantenimiento": return "/mantenimiento";
      case "Contacto": return "/contacto";
      default: return "/";
    }
  };

  // Helper to determine active state
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-border-light dark:border-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between relative z-50">
          <div className="flex items-center gap-12">
            {/* Logo clicks to home */}
            <Link
              to="/"
              className="flex items-center gap-3 focus:outline-none"
            >
              {/* CHANGE: To modify the logo SVG, edit src/components/ui/Logo.tsx */}
              <Logo className="h-12 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const path = getPath(link.label);
                return (
                  <Link
                    key={link.label}
                    to={path}
                    className={`text-base font-semibold transition-colors duration-200 ${isActive(path)
                      ? "text-primary"
                      : "text-text-dark dark:text-white hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/distribuidores">
              <Button
                variant="primary"
                size="sm"
                icon="person"
                className="hidden lg:inline-flex"
                as="div" // Assuming Button handles 'as' or wrapping logic, but Button is button. I should check Button. But wait, Button is just a button. I'll wrap it in Link.
              >
                Acceso Distribuidores
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-text-dark dark:text-white p-2 focus:outline-none active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-background-light dark:bg-background-dark md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">

          {/* Mobile Header inside Drawer */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-border-light dark:border-border-dark">
            <Link
              to="/"
              className="flex items-center gap-3 focus:outline-none"
            >
              {/* CHANGE: Logo component */}
              <Logo className="h-12 w-auto" />
            </Link>
            <button
              className="text-text-dark dark:text-white p-2 focus:outline-none active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-8">
            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link) => {
                const path = getPath(link.label);
                return (
                  <Link
                    key={link.label}
                    to={path}
                    className={`text-2xl font-bold py-5 border-b border-border-light dark:border-border-dark/30 flex items-center justify-between group ${isActive(path)
                      ? "text-primary"
                      : "text-text-dark dark:text-white"
                      }`}
                  >
                    {link.label}
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isActive(path) ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'}`}>
                      arrow_forward
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 space-y-6">
              <Link to="/distribuidores" className="block">
                <Button
                  variant="primary"
                  size="lg"
                  icon="person"
                  className="w-full justify-center py-4 text-base shadow-xl"
                  as="div"
                >
                  Acceso Distribuidores
                </Button>
              </Link>

              <div className="p-5 rounded-xl bg-gray-100 dark:bg-white/5 border border-border-light dark:border-border-dark mt-auto">
                <p className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-widest">Contacto Rápido</p>
                <div className="space-y-3">
                  <a href="tel:+525580000000" className="flex items-center gap-3 text-text-dark dark:text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                    <span className="font-bold">+52 (55) 8000 0000</span>
                  </a>
                  <a href="mailto:ventas@mequipo.com.mx" className="flex items-center gap-3 text-text-dark dark:text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                    <span className="text-sm">ventas@mequipo.com.mx</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 mb-4 text-center">
              <p className="text-xs text-text-dark/40 dark:text-white/40">© 2024 MEQUIPO México</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};