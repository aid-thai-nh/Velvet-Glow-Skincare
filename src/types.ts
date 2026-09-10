export type PageRoute = 'home' | 'products' | 'routine' | 'science' | 'about';

export interface Product {
  id: string;
  name: string;
  frenchName?: string;
  subtitle: string;
  category: 'serum' | 'cream' | 'oil' | 'cleanser' | 'sunscreen' | 'treatment' | 'toner' | 'eye-care' | 'mask';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  volume: string;
  isBestseller?: boolean;
  isNew?: boolean;
  image: string;
  galleryImages: string[];
  description: string;
  keyBenefits: string[];
  heroIngredients: {
    name: string;
    origin: string;
    benefit: string;
    purityPercentage?: string;
  }[];
  skinTypes: ('sensitive' | 'damaged' | 'aging' | 'dry' | 'all')[];
  skinConcerns: string[];
  ritualGuide: {
    morning: string;
    evening: string;
    texture: string;
    aroma: string;
  };
  clinicalResults: {
    percentage: number;
    claim: string;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVolume?: string;
}

export interface BotanicalIngredient {
  id: string;
  vietnameseName: string;
  scientificName: string;
  origin: string;
  extractionMethod: string;
  activeBioCompounds: string[];
  skinAction: string;
  iconType: string;
  imageUrl: string;
  featuredInProducts: string[];
}

export interface DiagnosticAnswer {
  skinType: string;
  primaryConcern: string;
  barrierStatus: string;
  routineHabit: string;
}

export interface DiagnosticResult {
  barrierScore: number;
  skinProfile: string;
  primaryDiagnosis: string;
  recommendedProducts: Product[];
  morningRoutine: string[];
  eveningRoutine: string[];
  lifestyleAdvice: string[];
}

export interface BoutiqueLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  image: string;
}
