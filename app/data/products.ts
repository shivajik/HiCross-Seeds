export interface Product {
  id: string;
  name: string;
  category: string;
  seedType: string;
  crop: string;
  imageUrl: string;
}

export const productCategories = [
  "All",
  "Improved Paddy Seeds",
  "Hybrid Paddy Seeds",
  "Hybrid Maize Seeds",
  "Research Wheat Seeds",
  "Mustard Seeds",
  "Sunflower Seeds",
  "Jowar Seeds",
  "Bajra Seeds",
  "Fodder Seeds"
];

export const products: Product[] = [
  // Improved Paddy Seeds
  { id: "hb-mastani", name: "HB-MASTANI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-mastani.jpg" },
  { id: "hb-tajmahal", name: "HB-TAJMAHAL", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-tajmahal.jpg" },
  { id: "hb-tulsi", name: "HB-TULSI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-tulsi.jpg" },
  { id: "hb-karishma", name: "HB-KARISHMA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-karishma.jpg" },
  { id: "hb-pistha", name: "HB-PISTHA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-pistha.jpg" },
  { id: "hb-jwala", name: "HB-JWALA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-jwala.jpg" },
  { id: "hb-pavitra", name: "HB-PAVITRA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-pavitra.jpg" },
  { id: "hb-sindhu", name: "HB-SINDHU", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-sindhu.jpg" },
  { id: "hb-virat", name: "HB-VIRAT", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-virat.jpg" },
  { id: "hb-raftar", name: "HB-RAFTAR", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-raftar.jpg" },
  { id: "hb-hero", name: "HB-HERO", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-hero.jpg" },
  { id: "hb-kranti", name: "HB-KRANTI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-kranti-new.jpg" },
  { id: "hb-sundari", name: "HB-SUNDARI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-sundari.jpg" },
  { id: "hb-keshar", name: "HB-KESHAR", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-keshar.jpg" },
  { id: "hb-pushpa", name: "HB-PUSHPA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-pushpa.jpg" },
  { id: "hb-tiger", name: "HB-TIGER", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-tiger.jpg" },
  { id: "hb-panther", name: "HB-PANTHER", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-panther.jpg" },
  { id: "hb-shresta", name: "HB-SHRESTA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-shresta.jpg" },
  { id: "hb-victory", name: "HB-VICTORY", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-victory.jpg" },
  { id: "hb-sumo", name: "HB-SUMO", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-sumo.jpg" },
  { id: "hb-shayani", name: "HB-SHAYANI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-shayani.jpg" },

  // Hybrid Paddy Seeds
  { id: "mahalaxmi", name: "MAHALAXMI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/mahalaxmi.jpg" },
  { id: "hb-phinix", name: "HB-PHINIX", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-phinix.jpg" },
  { id: "hb-polo", name: "HB-POLO", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-polo.jpg" },
  { id: "hb-paithani", name: "HB-PAITHANI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-paithani.jpg" },
  { id: "hb-simba", name: "HB-SIMBA", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-simba.jpg" },
  { id: "hb-sarkar", name: "HB-SARKAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sarkar.jpg" },
  { id: "hb-sardar", name: "HB-SARDAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sardar.jpg" },
  { id: "hb-wajir", name: "HB-WAJIR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-wajir.jpg" },
  { id: "hb-sikandar", name: "HB-SIKANDAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sikandar.jpg" },
  { id: "hb-vastad", name: "HB-VASTAD", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-vastad.jpg" },

  // Hybrid Maize Seeds
  { id: "champion-555", name: "CHAMPION 555", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/Champion_555.jpg" },
  { id: "bunny-999", name: "BUNNY 999", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/Bunny_999.jpg" },
  { id: "power-4055", name: "POWER 4055", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/Power_4055.jpg" },
  { id: "b-4550", name: "HICROSS B-4550", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/B-4550.jpg" },
  { id: "b-5055", name: "HICROSS B-5055", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/B-5055.jpg" },
  { id: "b-5560", name: "HICROSS B-5560", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/B-5560.jpg" },

  // Research Wheat Seeds
  { id: "hicross-3030", name: "HICROSS-3030", category: "Research Wheat Seeds", seedType: "Research", crop: "Wheat", imageUrl: "/products/hicross-3030.jpg" },

  // Mustard Seeds
  { id: "hi-black-diamond", name: "HI-BLACK DIAMOND", category: "Mustard Seeds", seedType: "Hybrid", crop: "Mustard", imageUrl: "/products/hi-black-diamond.jpg" },
];
