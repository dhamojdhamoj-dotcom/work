export type WorkCategory = 
  | 'all'
  | 'cupboards' 
  | 'modular_kitchen' 
  | 'bank_works' 
  | 'aluminium' 
  | 'repairs'
  | 'doors_windows'
  | 'polishing';

export interface ServiceItem {
  id: string;
  title: string;
  category: WorkCategory;
  tagline: string;
  description: string;
  image: string;
  materials: string[];
  features: string[];
  estimatedDays: string;
  freeServicesIncluded: string[];
  startingEstimate: string;
  popularFor: string;
}

export type OrderProgressStage = 
  | 'received' 
  | 'measurement' 
  | 'in_workshop' 
  | 'finishing' 
  | 'installed';

export interface TrackingStep {
  stage: OrderProgressStage;
  title: string;
  description: string;
  dateCompleted?: string;
  isCurrent: boolean;
  isCompleted: boolean;
}

export interface CarpenterOrder {
  id: string; // e.g. ARJ-8921
  customerName: string;
  phone: string;
  email?: string;
  workType: string;
  category: WorkCategory;
  woodMaterial: string;
  finishType: string;
  dimensions?: string;
  address: string;
  createdAt: string;
  expectedDelivery: string;
  estimatedCost: string;
  currentStage: OrderProgressStage;
  steps: TrackingStep[];
  carpenterNotes: string[];
  photoUpdates?: string[];
  isSample?: boolean;
}

export interface RepairAppointment {
  id: string;
  customerName: string;
  phone: string;
  problemType: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  address: string;
  preferredDate: string;
  preferredTimeSlot: string;
  description: string;
  status: 'pending' | 'confirmed' | 'technician_assigned' | 'completed';
  createdAt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: WorkCategory;
  location: string;
  image: string;
  woodUsed: string;
  duration: string;
  highlight: string;
  description: string;
  clientFeedback?: {
    name: string;
    rating: number;
    comment: string;
  };
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  workType: string;
  comment: string;
  verified: boolean;
  avatarSeed?: string;
}
