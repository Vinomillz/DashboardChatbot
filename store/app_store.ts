import { Order } from '@/types/order';
import { create } from 'zustand';

type AppStore = {
  order: Order | null;
  setOrder: (order: Order) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  order: null,
  setOrder: (order) => set({ order }),
}));
