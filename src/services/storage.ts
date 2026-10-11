import { CarpenterOrder, CustomerReview, OrderProgressStage, RepairAppointment } from '../types/carpentry';
import { INITIAL_ORDERS, INITIAL_REVIEWS } from '../data/mockData';

const ORDERS_STORAGE_KEY = 'arjun_carpenter_orders_v1';
const REPAIRS_STORAGE_KEY = 'arjun_carpenter_repairs_v1';
const REVIEWS_STORAGE_KEY = 'arjun_carpenter_reviews_v1';

export const getStoredOrders = (): CarpenterOrder[] => {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
      return INITIAL_ORDERS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ORDERS;
  }
};

export const saveOrder = (order: CarpenterOrder): CarpenterOrder[] => {
  const current = getStoredOrders();
  const updated = [order, ...current];
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const updateOrderStatus = (
  orderId: string, 
  stage: OrderProgressStage, 
  newNote?: string
): CarpenterOrder[] => {
  const current = getStoredOrders();
  const stageTitles: Record<OrderProgressStage, string> = {
    received: "Request Received & Blueprint Approved",
    measurement: "Site Visit & Laser Measurement Completed",
    in_workshop: "Timber Cutting & Carcass Joinery in Workshop",
    finishing: "Veneer Lamination & Polish Finishing",
    installed: "On-Site Assembly & Handover"
  };

  const stagesOrder: OrderProgressStage[] = [
    'received',
    'measurement',
    'in_workshop',
    'finishing',
    'installed'
  ];

  const targetIdx = stagesOrder.indexOf(stage);

  const updated = current.map((ord) => {
    if (ord.id !== orderId) return ord;

    const todayStr = new Date().toISOString().split('T')[0];

    const updatedSteps = stagesOrder.map((st, idx) => ({
      stage: st,
      title: stageTitles[st],
      description: idx <= targetIdx 
        ? `Stage verified by Master Carpenter Arjun on ${todayStr}` 
        : `Scheduled pending step in carpentry pipeline`,
      dateCompleted: idx <= targetIdx ? (ord.steps[idx]?.dateCompleted || todayStr) : undefined,
      isCurrent: idx === targetIdx,
      isCompleted: idx < targetIdx || (idx === targetIdx && stage === 'installed')
    }));

    const notes = [...(ord.carpenterNotes || [])];
    if (newNote) {
      notes.unshift(`${todayStr}: ${newNote}`);
    } else {
      notes.unshift(`${todayStr}: Status advanced to "${stageTitles[stage]}" by Arjun.`);
    }

    return {
      ...ord,
      currentStage: stage,
      steps: updatedSteps,
      carpenterNotes: notes
    };
  });

  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const findOrderByIdOrPhone = (query: string): CarpenterOrder | undefined => {
  const normalized = query.trim().toUpperCase();
  const rawDigits = query.replace(/\D/g, '');
  const orders = getStoredOrders();

  return orders.find(ord => {
    if (ord.id.toUpperCase() === normalized) return true;
    if (rawDigits.length >= 6 && ord.phone.replace(/\D/g, '').includes(rawDigits)) return true;
    if (ord.customerName.toLowerCase().includes(query.toLowerCase().trim())) return true;
    return false;
  });
};

export const getStoredRepairs = (): RepairAppointment[] => {
  try {
    const raw = localStorage.getItem(REPAIRS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveRepairAppointment = (apt: RepairAppointment): RepairAppointment[] => {
  const current = getStoredRepairs();
  const updated = [apt, ...current];
  localStorage.setItem(REPAIRS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getStoredReviews = (): CustomerReview[] => {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(INITIAL_REVIEWS));
      return INITIAL_REVIEWS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_REVIEWS;
  }
};

export const saveReview = (rev: CustomerReview): CustomerReview[] => {
  const current = getStoredReviews();
  const updated = [rev, ...current];
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const resetToDemoData = () => {
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(INITIAL_REVIEWS));
  localStorage.removeItem(REPAIRS_STORAGE_KEY);
};
