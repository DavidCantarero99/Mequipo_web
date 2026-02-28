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

const SPARE_PARTS: Product[] = [
  {
    id: "rep-ak400-termostato-400f",
    name: "AK400 TERMOSTATO ELÉCTRICO 400°F",
    image: "https://cdn1.zohoecommerce.com/product-images/AK400+-foto+01.jpg/5942703000000577022/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Termostato eléctrico con rango de operación hasta 400°F. Ideal para control de temperatura en hornos y equipos de cocción comercial.",
    sku: "AK400",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000577011/description_images/AK400-1.png",
  },
  {
    id: "rep-ltp6-termopila-600mm",
    name: "L-TP6 TERMOPILA 600mm LARGO",
    image: "https://cdn1.zohoecommerce.com/product-images/L-TP6-+foto+01.jpg/5942703000000577080/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termopila",
    description: "Termopila de 600 mm de largo para generación de milivoltios en sistemas de seguridad de flama. Compatible con equipos de gas a milivoltios.",
    sku: "L-TP6",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000577060/description_images/TERMOPILA.png",
  },
  {
    id: "rep-ab007mv-valvula-milivoltica",
    name: "AB007-MV VALVULA DE CONTROL MILIVOLTICA",
    image: "https://cdn1.zohoecommerce.com/product-images/AB1003-foto01.jpg/5942703000000577118/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de control milivoltica para sistemas de gas. Regula el flujo de gas en equipos que operan con señal de termopila o milivoltios.",
    sku: "AB007-MV",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000577107/description_images/AB007-1.png",
  },
  {
    id: "rep-ar14-termostato-milivolts-400f",
    name: "AR1/4 TERMOSTATO DE MILIVOLTIOS, 400°F, 1/4",
    image: "https://cdn1.zohoecommerce.com/product-images/AR1-4-foto02.jpg/5942703000000577213/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Termostato de milivoltios con conexión de 1/4\" y temperatura máxima de 400°F. Usado en hornos y freidoras de gas con sistema de seguridad por termopila.",
    sku: "AR1/4",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000577202/description_images/TERMOSTATO%20AR1-4.png",
  },
  {
    id: "rep-a18318-valvula-paso-sin-seguridad",
    name: "A18-318 VALVULA DE PASO DE GAS SIN SISTEMA DE SEGURIDAD",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.jpeg/5942703000000963098/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de paso de gas sin sistema de seguridad integrado. Permite el control manual del flujo de gas en estufas y equipos de cocción.",
    sku: "A18-318",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000700147/description_images/A18-318-1.png",
  },
  {
    id: "rep-mdi002764-modulo-ignicion-horno",
    name: "MDI002764 MODULO DE IGNICION PARA HORNO",
    image: "https://cdn1.zohoecommerce.com/product-images/mgYTz8Khwi_FICHATECNICADEREPUESTOPRC0025942.jpg/5942703000000991031/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Ignición",
    description: "Módulo de ignición electrónica para horno de gas. Genera la chispa de encendido para el quemador principal del horno de manera automática y segura.",
    sku: "MDI002764",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000700160/description_images/PRC002764-1.png",
  },
  {
    id: "rep-261080-campana-orificio",
    name: "261080 CAMPANA DE ORIFICIO",
    image: "https://cdn1.zohoecommerce.com/product-images/261080+campana+de+orificio.jpg/5942703000000717447/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Campana de orificio para quemador de gas. Dirige y distribuye el flujo de gas hacia el quemador garantizando una combustión uniforme y eficiente.",
    sku: "261080",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717436/description_images/26-1080-1.png",
  },
  {
    id: "rep-261110-campana-orificio",
    name: "261110 CAMPANA DE ORIFICIO",
    image: "https://cdn1.zohoecommerce.com/product-images/Captura+de+pantalla+2025-10-10+162923.png/5942703000000963362/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Campana de orificio modelo 261110 para quemador de gas. Asegura una distribución homogénea del gas y optimiza la eficiencia de combustión del equipo.",
    sku: "261110",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717477/description_images/261110-1.png",
  },
  {
    id: "rep-8261072-kit-quemador-universal-infrarrojo",
    name: "8261072 KIT DE QUEMADOR UNIVERSAL, INFRARROJOS, GAS NATURAL Y PROPANO",
    image: "https://cdn1.zohoecommerce.com/product-images/8261072.png/5942703000000717551/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Kit de quemador universal infrarrojo compatible con gas natural y propano. Proporciona calor radiante intenso y uniforme para asadores y equipos de alta demanda.",
    sku: "8261072",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717541/description_images/8261072-1.png",
  },
  {
    id: "rep-40301-quemador-infrarrojo",
    name: "4.03.01.00021186 QUEMADOR INFRARROJO",
    image: "https://cdn1.zohoecommerce.com/product-images/IMG_20230609_093755_591.jpg/5942703000000717594/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Quemador infrarrojo de alta eficiencia para equipos de cocción y asado. Genera calor radiante directo para una cocción rápida y uniforme.",
    sku: "4.03.01.00021186",
    cta: "techdata",
  },
  {
    id: "rep-abc460-quemador-ceramic-burner",
    name: "ABC460 QUEMADOR INFRARROJO CERAMIC BURNER",
    image: "https://cdn1.zohoecommerce.com/product-images/ceramicburnerABC.png/5942703000000717651/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Quemador infrarrojo cerámico modelo ABC460. Superficie cerámica de alta durabilidad que distribuye el calor de manera uniforme en asadores y parrillas comerciales.",
    sku: "ABC460",
    cta: "techdata",
  },
  {
    id: "rep-ak550-termostato-horno-550f",
    name: "AK550 TERMOSTATO ELECTRICO PARA HORNO DE 200-550°F",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.jpeg/5942703000000939039/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Termostato eléctrico para horno con rango de 200 a 550°F. Permite un control preciso de la temperatura en hornos comerciales de convección y convencionales.",
    sku: "AK550",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717682/description_images/AK550-1.png",
  },
  {
    id: "rep-419772-kit-termostato-220v-200c",
    name: "419772 KIT TERMOSTATO ELECTRICO220V DE 60º A 200ºC",
    image: "https://cdn1.zohoecommerce.com/product-images/419772-43.jpg/5942703000000717744/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Kit de termostato eléctrico a 220V con rango de 60°C a 200°C. Incluye los componentes necesarios para el control de temperatura en equipos de cocción eléctricos.",
    sku: "419772",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717733/description_images/419772-1.png",
  },
  {
    id: "rep-419773-kit-termostato-350c",
    name: "419773 KIT TERMOSTATO ELECTRICO DE 50º A 350ºC",
    image: "https://cdn1.zohoecommerce.com/product-images/419773-04.jpg/5942703000000717777/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Kit de termostato eléctrico con rango ampliado de 50°C a 350°C. Apto para hornos de alta temperatura y equipos de frituras industriales.",
    sku: "419773",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717766/description_images/419773-1.png",
  },
  {
    id: "rep-419774-kit-termostato-400c",
    name: "419774 KIT TERMOSTATO ELECTRICO DE 75º A 400ºC",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600+%281%29.jpeg/5942703000000953103/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termostato",
    description: "Kit de termostato eléctrico de alto rendimiento con rango de 75°C a 400°C. Diseñado para equipos industriales que requieren temperaturas de operación extremas.",
    sku: "419774",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000717809/description_images/419774-1.png",
  },
  {
    id: "rep-80301-espada-rostizador-pollo",
    name: "8.03.01.00120001 ESPADA PARA ROSTIZADOR DE POLLO",
    image: "https://cdn1.zohoecommerce.com/product-images/IMG_20230518_152205_714.jpg/5942703000000717859/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Accesorio",
    description: "Espada de acero inoxidable de repuesto para rostizador de pollo. Permite ensartar y rotar las piezas de manera uniforme garantizando una cocción pareja.",
    sku: "8.03.01.00120001",
    cta: "techdata",
  },
  {
    id: "rep-cestos-asadores-pollo",
    name: "CESTOS PARA ASADORES DE POLLOS",
    image: "https://cdn1.zohoecommerce.com/product-images/cestos.jpg/5942703000000717892/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Accesorio",
    description: "Cestos de acero inoxidable para asadores de pollos. Facilitan la carga y rotación del producto para un asado uniforme y eficiente en rostizadores comerciales.",
    sku: "CESTOS-ASADOR",
    cta: "techdata",
  },
  {
    id: "rep-ar19l1-valvula-paso-seguridad",
    name: "AR19-L1 VALVULA DE PASO CON SISTEMA DE SEGURIDAD",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.jpeg/5942703000000963025/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de paso de gas con sistema de seguridad integrado. Corta automáticamente el suministro de gas si se apaga la flama, protegiendo el equipo y al operador.",
    sku: "AR19-L1",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000721017/description_images/AR19-L1-1.png",
  },
  {
    id: "rep-a60-valvula-paso-seguridad",
    name: "Válvula de paso con sistema de seguridad A60",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.jpeg/5942703000000961178/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de paso de gas modelo A60 con sistema de seguridad termoeléctrico. Interrumpe el flujo de gas automáticamente ante la extinción de la flama piloto.",
    sku: "A60",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000961108/description_images/A-60.png",
  },
  {
    id: "rep-as02-valvula-solenoide",
    name: "VÁLVULA SOLENOIDE AS02",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600+%281%29.jpg/5942703000000961342/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula solenoide de gas modelo AS02. Controlada eléctricamente para abrir o cerrar el flujo de gas de forma automatizada en hornos y equipos industriales.",
    sku: "AS02",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000961289/description_images/AS02-1.png",
  },
  {
    id: "rep-valvula-solenoide-horno-gas",
    name: "VÁLVULA SOLENOIDE DE HORNO DE GAS",
    image: "https://cdn1.zohoecommerce.com/product-images/WhatsApp+Image+2021-02-18+at+11.16.17+AM.jpg/5942703000000961416/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula solenoide específica para hornos de gas. Controla el paso de gas al quemador principal mediante señal eléctrica del termostato o programador del horno.",
    sku: "VALV-SOL-HORNO",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000968058/description_images/4626-002-1.png",
  },
  {
    id: "rep-4626002-valvula-paso-gas-seguro",
    name: "4626-002 VALVULA DE PASO GAS CON SEGURO",
    image: "https://cdn1.zohoecommerce.com/product-images/DocTemplates_ItemImage_5942703000000963180.png/5942703000000968132/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de paso de gas con dispositivo de seguro mecánico modelo 4626-002. Previene aperturas accidentales y garantiza el cierre seguro del suministro de gas.",
    sku: "4626-002",
    cta: "techdata",
  },
  {
    id: "rep-piloto-t-chispero",
    name: "PILOTO EN T CON CHISPERO",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.jpeg/5942703000000991314/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Ignición",
    description: "Conjunto de piloto en T con chispero integrado para encendido electrónico de equipos de gas. Mantiene la flama piloto permanente para el encendido del quemador principal.",
    sku: "PILOTO-T-CHISP",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000991248/description_images/B13H6B-1.png",
  },
  {
    id: "rep-modulo-ignicion",
    name: "MODULO DE IGNICIÓN",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600.png/5942703000000994041/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Ignición",
    description: "Módulo de ignición electrónica para equipos de gas. Genera pulsos de alta tensión para el encendido automático del quemador, eliminando la necesidad de flama piloto permanente.",
    sku: "MOD-IGNICION",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000000994001/description_images/PRC002594-1.png",
  },
  {
    id: "rep-valvula-gas-purga",
    name: "Válvula de gas de control de purga",
    image: "https://cdn1.zohoecommerce.com/product-images/600x600+%281%29.jpeg/5942703000001015090/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de control de purga para sistemas de gas. Permite liberar el gas residual del circuito antes del encendido o durante el mantenimiento del equipo.",
    sku: "VALV-GAS-PURGA",
    cta: "techdata",
    techSheetUrl: "https://www.equiproh.com/products/5942703000001015027/description_images/700-886-2.png",
  },
  {
    id: "rep-112400-quemador-tubular",
    name: "1-12-400 QUEMADOR TUBULAR",
    image: "https://cdn1.zohoecommerce.com/product-images/DocTemplates_ItemImage_265561000023473030.png/5942703000002088036/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Quemador tubular modelo 1-12-400 para equipos de gas. Diseño tubular que distribuye la flama de forma lineal y uniforme a lo largo del quemador.",
    sku: "1-12-400",
    cta: "techdata",
  },
  {
    id: "rep-hilo-cocina-ama350",
    name: "HILO DE COCINA PARA AMARRADORA AMA-350",
    image: "https://cdn1.zohoecommerce.com/product-images/22-07-2025+11_00_41_14.png/5942703000002376036/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Accesorio",
    description: "Hilo de algodón alimentario de repuesto para la amarradora de pollos AMA-350. Resistente al calor y apto para uso en contacto con alimentos.",
    sku: "HILO-AMA350",
    cta: "techdata",
  },
  {
    id: "rep-l2pv-perilla-valvula",
    name: "L-2PV PERILLA PARA A18-3 18 / AR19-L1",
    image: "https://cdn1.zohoecommerce.com/product-images/IMG_20230621_075953_349.jpg/5942703000002376079/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Accesorio",
    description: "Perilla de repuesto modelo L-2PV para válvulas A18-318 y AR19-L1. Permite el control manual del flujo de gas con agarre ergonómico y marcas de posición claras.",
    sku: "L-2PV",
    cta: "techdata",
  },
  {
    id: "rep-28040-valvula-paso-gas",
    name: "2.80.40.00004552 VALVULA DE PASO DE GAS",
    image: "https://cdn1.zohoecommerce.com/product-images/IMG_20230608_161226_029.jpg/5942703000002376144/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Válvula",
    description: "Válvula de paso de gas para control del flujo en estufas y equipos de cocción comercial. Construcción robusta en latón para uso intensivo en cocinas profesionales.",
    sku: "2.80.40.00004552",
    cta: "techdata",
  },
  {
    id: "rep-80213-conjunto-quemador-fcdbg",
    name: "8.02.13.07003900 CONJUNTO MONTAJE QUEMADOR FCDBG",
    image: "https://cdn1.zohoecommerce.com/product-images/61.png/5942703000002376200/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Quemador",
    description: "Conjunto completo de montaje para quemador FCDBG. Incluye todos los componentes necesarios para la instalación y operación del quemador en equipos de cocción comercial.",
    sku: "8.02.13.07003900",
    cta: "techdata",
  },
  {
    id: "rep-alch-interruptor-limite-alto",
    name: "ALCH INTERRUPTOR DE LIMITE ALTO",
    image: "https://cdn1.zohoecommerce.com/product-images/alch-1.png/5942703000002376250/1200x1200?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Seguridad",
    description: "Interruptor de límite alto (high-limit switch) para protección térmica de equipos de cocción. Corta la energía automáticamente cuando la temperatura supera el límite seguro de operación.",
    sku: "ALCH",
    cta: "techdata",
  },
  {
    id: "rep-agt60-termometro-horno-350c",
    name: "AGT-60-350 TERMOMETRO PARA HORNO 350°C",
    image: "https://cdn1.zohoecommerce.com/product-images/Dise%C3%B1o+sin+t%C3%ADtulo+1+%281%29.png/5942703000002376301/800x800?storefront_domain=www.equiproh.com",
    tagLabel: "",
    tagValue: "Termómetro",
    description: "Termómetro analógico para horno con escala hasta 350°C. Permite monitorear visualmente la temperatura interna del horno para una cocción precisa y consistente.",
    sku: "AGT-60-350",
    cta: "techdata",
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
          title="Peladoras Industriales"
          description="Reduce drásticamente los tiempos de preparación con peladoras industriales de alta eficiencia. Te ofrecemos soluciones especializadas y robustas para pelar ajos sin dañarlos y papas en cuestión de minutos, maximizando la productividad e higiene de tu negocio gastronómico."
          products={PEELERS}
        />

        <CategorySection
          title="Repuestos y Refacciones"
          description="Mantén tus equipos Skymsen siempre en óptimas condiciones con refacciones 100% originales. Contamos con discos, cuchillas, sellos, jarras y componentes eléctricos para toda la línea de productos: procesadores PA-7/PA-14, extractores ESB, licuadoras LAR y peladoras DB-10/DAL-06."
          products={SPARE_PARTS}
        />
      </div>
    </div>
  );
};