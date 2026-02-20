import { NavLink, ProductSpec, FeatureItem } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Distribuidores", href: "#" },
  { label: "Mantenimiento", href: "#" },
  { label: "Contacto", href: "#" },
];

export const PRODUCT_SPECS: ProductSpec[] = [
  { label: "Potencia", value: "0.5 CV" },
  { label: "Producción", value: "250 kg/h" },
  { label: "Material", value: "Acero Inoxidable" },
  { label: "Peso", value: "28,60 kg" },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: "public",
    title: "Tecnología de Clase Mundial",
    description: "Equipos fabricados con ingeniería brasileña de vanguardia, diseñados para soportar el uso intensivo de cocinas profesionales."
  },
  {
    icon: "verified",
    title: "Refacciones Originales",
    description: "Solo distribuimos piezas genuinas Skymsen, garantizando la vida útil y rendimiento de tus equipos."
  },
  {
    icon: "support_agent",
    title: "Asesoría Especializada",
    description: "Nuestro equipo te guía para elegir la solución perfecta según las necesidades de tu operación."
  }
];

export const IMAGES = {
  // CHANGE: Update these URLs with your specific product images (e.g., from your assets folder or CDN)
  heroProduct: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020110/DB-10v3_qrkggs.webp",
  spotlightProduct: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020110/PA7PRO_ah6w0l.webp",
  //Procesadores
  PA7PRO: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020110/PA7PRO_ah6w0l.webp",
  PA14N: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020084/PA14_v2otkb.webp",
  //Extractores
  ESB: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020083/ESBNV1_syzlkl.webp",
  //Blender
  LAR04: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771081930/LAR04_lzco4z.webp",
  LAR08: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771081930/LAR08_tunhfn.webp",
  LAR25PMB: "https://res.cloudinary.com/dwikid1wv/image/upload/v1771081933/LAR25_gwfkvi.webp",
  //Peeler
  DB10: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020110/DB-10v3_qrkggs.webp",
  DAL6: "https://res.cloudinary.com/dwikid1wv/image/upload/c_fill,w_800,h_800/v1771020084/DAL-06-2_a8ooqg.webp",
};