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
  { id: "bhavitha", name: "BHAVITHA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1593935127914-a85b9f8838e8?w=800&q=80" },
  { id: "hb-virat", name: "HB-VIRAT", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-virat.jpg" },
  { id: "hb-raftar", name: "HB-RAFTAR", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-raftar.jpg" },
  { id: "hb-24-carret", name: "HB-24 CARRET", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { id: "hb-chetak", name: "HB-CHETAK", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80" },
  { id: "hb-hero", name: "HB-HERO", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-hero.jpg" },
  { id: "hb-capital", name: "HB-CAPITAL", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80" },
  { id: "hb-kranti", name: "HB-KRANTI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-kranti-new.jpg" },
  { id: "hb-chameli", name: "HB-CHAMELI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80" },
  { id: "hb-sundari", name: "HB-SUNDARI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-sundari.jpg" },
  { id: "hb-bigbold", name: "HB-BIGBOLD", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80" },
  { id: "hb-keshar", name: "HB-KESHAR", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-keshar.jpg" },
  { id: "hb-pushpa", name: "HB-PUSHPA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-pushpa.jpg" },
  { id: "hb-tiger", name: "HB-TIGER", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-tiger.jpg" },
  { id: "hb-panther", name: "HB-PANTHER", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-panther.jpg" },
  { id: "hb-gabbar", name: "HB-GABBAR", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { id: "hb-shresta", name: "HB-SHRESTA", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-shresta.jpg" },
  { id: "hb-victory", name: "HB-VICTORY", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-victory.jpg" },
  { id: "hb-sumo", name: "HB-SUMO", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-sumo.jpg" },
  { id: "hb-shayani", name: "HB-SHAYANI", category: "Improved Paddy Seeds", seedType: "Improved", crop: "Paddy", imageUrl: "/products/hb-shayani.jpg" },

  // Hybrid Paddy Seeds
  { id: "mahalaxmi", name: "MAHALAXMI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/mahalaxmi.jpg" },
  { id: "hb-garuda", name: "HB-GARUDA", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { id: "hb-phinix", name: "HB-PHINIX", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-phinix.jpg" },
  { id: "hb-polo", name: "HB-POLO", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-polo.jpg" },
  { id: "hb-paithani", name: "HB-PAITHANI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-paithani.jpg" },
  { id: "hb-bajirao", name: "HB-BAJIRAO", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80" },
  { id: "hb-simba", name: "HB-SIMBA", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-simba.jpg" },
  { id: "hb-sarkar", name: "HB-SARKAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sarkar.jpg" },
  { id: "hb-sardar", name: "HB-SARDAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sardar.jpg" },
  { id: "hb-caption", name: "HB-CAPTION", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80" },
  { id: "hb-classic", name: "HB-CLASSIC", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80" },
  { id: "hb-wajir", name: "HB-WAJIR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-wajir.jpg" },
  { id: "hb-sikandar", name: "HB-SIKANDAR", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-sikandar.jpg" },
  { id: "hb-bullet", name: "HB-BULLET", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80" },
  { id: "hb-anandi", name: "HB-ANANDI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { id: "hb-fouji", name: "HB-FOUJI", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80" },
  { id: "hb-vastad", name: "HB-VASTAD", category: "Hybrid Paddy Seeds", seedType: "Hybrid", crop: "Paddy", imageUrl: "/products/hb-vastad.jpg" },

  // Hybrid Maize Seeds
  { id: "champion-555", name: "Champion 555", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80" },
  { id: "bunny-999", name: "Bunny 999", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80" },
  { id: "power-4055", name: "Power 4055", category: "Hybrid Maize Seeds", seedType: "Hybrid", crop: "Maize", imageUrl: "/products/power-4055.jpg" },

  // Research Wheat Seeds
  { id: "hicross-3030", name: "HICROSS-3030", category: "Research Wheat Seeds", seedType: "Research", crop: "Wheat", imageUrl: "/products/hicross-3030.jpg" },

  // Mustard Seeds
  { id: "hi-black-diamond", name: "HI-BLACK DIAMOND", category: "Mustard Seeds", seedType: "Hybrid", crop: "Mustard", imageUrl: "/products/hi-black-diamond.jpg" },

  // Sunflower Seeds
  { id: "bindaas-444", name: "BINDAAS-444", category: "Sunflower Seeds", seedType: "Hybrid", crop: "Sunflower", imageUrl: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&q=80" },
  { id: "don-888", name: "DON-888", category: "Sunflower Seeds", seedType: "Hybrid", crop: "Sunflower", imageUrl: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&q=80" },
  { id: "glamour-555", name: "GLAMOUR-555", category: "Sunflower Seeds", seedType: "Hybrid", crop: "Sunflower", imageUrl: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&q=80" },

  // Jowar Seeds
  { id: "dhanush-333", name: "DHANUSH-333", category: "Jowar Seeds", seedType: "Hybrid", crop: "Jowar", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "titanim-111", name: "Titanim-111", category: "Jowar Seeds", seedType: "Hybrid", crop: "Jowar", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "hanuman-444", name: "HANUMAN-444", category: "Jowar Seeds", seedType: "Hybrid", crop: "Jowar", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "maruthi-555", name: "MARUTHI-555", category: "Jowar Seeds", seedType: "Hybrid", crop: "Jowar", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },

  // Bajra Seeds
  { id: "mahendra-444", name: "MAHENDRA-444", category: "Bajra Seeds", seedType: "Hybrid", crop: "Bajra", imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80" },
  { id: "mahi-999", name: "MAHI-999", category: "Bajra Seeds", seedType: "Hybrid", crop: "Bajra", imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80" },
  { id: "yamuna-555", name: "YAMUNA-555", category: "Bajra Seeds", seedType: "Hybrid", crop: "Bajra", imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80" },

  // Fodder Seeds
  { id: "hema-222", name: "HEMA-222", category: "Fodder Seeds", seedType: "Hybrid", crop: "Sorghum Sudan Grass", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "sony-555", name: "SONY-555", category: "Fodder Seeds", seedType: "Hybrid", crop: "Sorghum Sudan Grass", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "bindu-66", name: "BINDU-66", category: "Fodder Seeds", seedType: "Hybrid", crop: "Sorghum Sudan Grass", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "varun-777", name: "VARUN-777", category: "Fodder Seeds", seedType: "Hybrid", crop: "Sorghum Sudan Grass", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
];
