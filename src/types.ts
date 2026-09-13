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

export interface CustomerReview {
  id: string;
  author: string;
  city: string;
  age: number;
  skinTypeTag: string;
  durationUsed: string;
  rating: number;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  dermatologistRecommended?: boolean;
  date: string;
  productName: string;
}

export interface ClinicalTrialData {
  id: string;
  title: string;
  durationWeeks: number;
  participantCount: number;
  institution: string;
  beforeImage: string;
  afterImage: string;
  tewlReduction: number; // Mất nước qua biểu bì
  erythemaReduction: number; // Giảm đỏ
  hydrationIncrease: number; // Tăng ẩm
  keyObservation: string;
}

export interface CheckoutOrder {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
  customer: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    province: string;
    district: string;
    note?: string;
  };
  paymentMethod: 'vietqr' | 'cod' | 'momo';
  subscriptionPlan?: 'none' | '30days' | '45days' | '60days';
  status: 'pending_payment' | 'confirmed' | 'shipping';
}
