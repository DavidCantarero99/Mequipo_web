import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { FeatureGrid } from "./components/home/FeatureGrid";
import { ProductSpotlight } from "./components/home/ProductSpotlight";
import { CtaSection } from "./components/home/CtaSection";
import { MaintenancePage } from "./components/maintenance/MaintenancePage";
import { ProductsPage } from "./components/products/ProductsPage";
import { DistributorsPage } from "./components/distributors/DistributorsPage";
import { ContactPage } from "./components/contact/ContactPage";
import { ScrollToTop } from "./components/common/ScrollToTop"; // Import ScrollToTop
import { SEO } from "./components/common/SEO";

import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-text-dark dark:text-white">
        <Header />
        <main className="flex-grow flex flex-col w-full">
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="Soluciones Industriales"
                  description="Proveedor líder de equipo industrial, refacciones y mantenimiento para cocinas profesionales. Distribuidores autorizados de Skymsen."
                />
                <Hero />
                <FeatureGrid />
                <ProductSpotlight />
                <CtaSection />
              </>
            } />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/distribuidores" element={<DistributorsPage />} />
            <Route path="/mantenimiento" element={<MaintenancePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;