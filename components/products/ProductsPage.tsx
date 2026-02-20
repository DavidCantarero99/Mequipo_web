import React from "react";
import { IMAGES } from "../../constants";
import { SEO } from "../common/SEO";

// --- Product Data ---

interface Product {
  id: string;
  name: string;
  image: string;
  tagLabel: string;
  tagValue: string;
  description: string;
  sku?: string;
  techSheetUrl?: string; // URL for the technical sheet PNG
  cta: "details" | "techdata";
}

const FOOD_PROCESSORS: Product[] = [
  {
    id: "pa7",
    name: "PA-7 PRO",
    image: IMAGES.PA7PRO,
    tagLabel: "",
    tagValue: "Industrial",
    description: "El Procesador de Alimentos PA-7 PRO de Skymsen, fabricado en acero inoxidable, es un equipo robusto y eficiente. Está diseñado para realizar una variedad de cortes, incluyendo rallado y desmenuzado, asegurando la estandarización en negocios de comida rápida y restaurantes",
    cta: "details",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/50PROCESADORDEALIMENTOSPA7PRO_l981yz.png", // Placeholder
  },
  {
    id: "pa14",
    name: "PA-14N",
    image: IMAGES.PA14N,
    tagLabel: "",
    tagValue: 'Procesadora',
    description: "PA-14-N es una verdadera potencia, diseñada específicamente para satisfacer las exigencias de grandes cocinas, comedores industriales y centros de procesamiento. Este \"Gigante\" destaca por contar con la boca de alimentación más grande de su categoría (166 x 210 mm), lo que facilita el manejo de grandes volúmenes de ingredientes sin esfuerzo",
    cta: "details",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437898/PROCESADOR_INDUSTRIAL_PA-14-N_aq8kay.png", // Placeholder
  },
];

const BEVERAGES: Product[] = [
  {
    id: "esb",
    name: "ESB-N",
    image: IMAGES.ESB,
    tagLabel: "",
    tagValue: "Extractor",
    description: "El Extractor ESB-N de la marca SKYMSEN es un dispositivo diseñado para facilitar la extracción de jugo de frutas cítricas de manera eficaz y veloz. Es un extractor profesional modelo ESB-N, equipo compacto y de uso fácil.",
    sku: "SKY-ESB-12",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/EXTRACTOR_ESB-N_aqs9x3.png", // Placeholder
  },

];

const BLENDERS: Product[] = [
  {
    id: "lar04",
    name: "LAR-04",
    image: IMAGES.LAR04,
    tagLabel: "",
    tagValue: "Monobloque",
    description: "Monobloc stainless-steel jar blender for hot sauces and thick mixtures. High-torque motor built for continuous use.",
    sku: "SKY-LAR-2MN",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437896/LICUADORA_COMERCIAL_DE_SOBREMESA_-LAR-04-MB_q07dtb.png", // Placeholder
  },
  {
    id: "lar08",
    name: "LAR-08",
    image: IMAGES.LAR08,
    tagLabel: "",
    tagValue: "Comercial",
    description: "4-liter capacity commercial blender with seamless stainless-steel jar. Ideal for soups, salsas, and purées.",
    sku: "SKY-LAR-4MN",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/LICUADORA_COMERCIAL_DE_SOBREMESA_LAR-08_MB_eeqx6e.png", // Placeholder
  },
  {
    id: "lar25",
    name: "LAR-25PMB",
    image: IMAGES.LAR25PMB,
    tagLabel: "",
    tagValue: "Industrial",
    description: "Para operaciones que exigen máxima capacidad, la Licuadora Comercial Basculante LAR-25PMB es la opción definitiva. Con una generosa capacidad nominal de 25 litros y 1.5 HP de potencia",
    sku: "SKY-LAR-25PMB",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/LICUADORA_INDUSTRIAL_LAR-25PMB_i0xfef.png", // Placeholder
  },
];

const PEELERS: Product[] = [
  {
    id: "db10",
    name: "DB-10",
    image: IMAGES.DB10,
    tagLabel: "",
    tagValue: "Industrial",
    description: "Solución ideal para cocinas comerciales que buscan velocidad y seguridad. Construida íntegramente en acero inoxidable, esta máquina robusta incorpora una puerta innovadora que permite la retirada rápida y segura de los productos pelados, agilizando todo el proceso de preparación.",
    sku: "SKY-DB-10",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437897/PELADOR_DE_PAPAS_DB-10_n17biv.png", // Placeholder
  },
  {
    id: "dal06",
    name: "DAL-06",
    image: IMAGES.DAL6,
    tagLabel: "",
    tagValue: "Compacto",
    description: "Este equipo de acero inoxidable está diseñado para pelar ajos de manera rápida y eficiente. Su sistema incluye un disco con tiras de goma de alta durabilidad diseñado para pelar los dientes de ajo suavemente sin dañarlos, reduciendo drásticamente el desperdicio.",
    sku: "DAL-06",
    cta: "techdata",
    techSheetUrl: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771437896/PELADOR_DE_AJOS_DAL-06S_cxbjsq.png", // Placeholder
  },
];

// --- Category Section Component ---

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, products }) => (
  <section className="mb-20">
    {/* Header with red left border */}
    <div className="border-l-4 border-primary pl-6 mb-10">
      <h2 className="text-2xl lg:text-3xl font-black text-text-dark dark:text-white tracking-tight mb-2">{title}</h2>
      <p className="text-sm lg:text-base text-text-dark/60 dark:text-white/60 max-w-3xl leading-relaxed">{description}</p>
    </div>

    {/* 3-column product grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

// --- Product Card Component ---

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white dark:bg-[#171717] rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
    {/* Image area with teal background */}
    <div className="aspect-[4/4] flex items-center justify-center p-6 relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="max-w-full max-h-full object-cover z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg rounded-xl"
      />
    </div>

    {/* Card body */}
    <div className="p-5 flex flex-col flex-grow">
      {/* Name + Tag row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight">{product.name}</h3>
        {product.tagValue && (
          <span className="text-xs font-bold text-primary whitespace-nowrap mt-0.5">{product.tagValue}</span>
        )}
        {product.tagLabel && (
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider whitespace-nowrap mt-1">{product.tagLabel}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-dark/60 dark:text-white/60 leading-relaxed mb-4 flex-grow">{product.description}</p>

      {/* Footer: CTA link */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border-light dark:border-border-dark">
        {product.sku && (
          <span className="text-[11px] text-text-dark/40 dark:text-white/40 font-medium">SKU: {product.sku}</span>
        )}
        {product.techSheetUrl ? (
          <a
            href={product.techSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 ml-auto"
          >
            Descargar Ficha Técnica
            <span className="material-symbols-outlined text-base">download</span>
          </a>
        ) : (
          <span className="text-sm font-bold text-gray-400 cursor-not-allowed inline-flex items-center gap-1 ml-auto" title="Ficha técnica no disponible">
            Descargar Ficha Técnica
            <span className="material-symbols-outlined text-base">download</span>
          </span>
        )}
      </div>
    </div>
  </div>
);

// --- Main Page ---

export const ProductsPage: React.FC = () => {
  return (
    <div className="w-full animate-fade-in pb-24">
      <SEO
        title="Catálogo de Productos"
        description="Descubre nuestra gama de procesadores de alimentos, licuadoras y equipos industriales Skymsen. Calidad y durabilidad para tu cocina."
      />
      {/* Page Header — kept as-is */}
      <section className="bg-background-light dark:bg-black py-16 border-b border-border-light dark:border-border-dark">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Soluciones Industriales</span>
          <h1 className="text-4xl lg:text-5xl font-black text-text-dark dark:text-white mb-4 tracking-tight">Catálogo de <span className="text-primary">Productos</span></h1>
          <p className="text-xl text-text-dark/60 dark:text-white/60 max-w-2xl leading-relaxed">
            Equipamiento diseñado para soportar las exigencias de cocinas profesionales, hoteles y comedores industriales.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16">
        <CategorySection
          title="Procesadores de Alimentos"
          description="Optimiza la preparación de ingredientes en tu cocina industrial con nuestra línea de procesadores de alimentos Skymsen. Estos equipos robustos de acero inoxidable están diseñados para rebanar, rallar y desmenuzar con precisión y rapidez , estandarizando los procesos en restaurantes y comedores de alto volumen."
          products={FOOD_PROCESSORS}
        />

        <CategorySection
          title="Extractores de Bebidas"
          description="Agiliza tu servicio de bebidas con extractores de cítricos profesionales. Diseñados en acero inoxidable para una extracción de jugo rápida y eficiente , nuestros exprimidores son perfectos para cafeterías y restaurantes."
          products={BEVERAGES}
        />

        <CategorySection
          title="Licuadoras Industriales"
          description="Potencia y versatilidad para tu cocina. Las licuadoras industriales Skymsen están diseñadas para procesar grandes volúmenes de ingredientes de forma rápida y eficiente. Con motores de alto rendimiento y construcción robusta en acero inoxidable, son ideales para preparar sopas, salsas, purés en restaurantes, hoteles y servicios de alimentación masiva."
          products={BLENDERS}
        />

        <CategorySection
          title="Peleadores Industriales"
          description="Reduce drásticamente los tiempos de preparación con peladoras industriales de alta eficiencia. Te ofrecemos soluciones especializadas y robustas para pelar ajos sin dañarlos y papas en cuestión de minutos , maximizando la productividad e higiene de tu negocio gastronómico."
          products={PEELERS}
        />
      </div>
    </div>
  );
};