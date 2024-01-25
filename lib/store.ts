import { create } from "zustand";
interface StoreProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const useStore = create<StoreProps>((set) => ({
  visible: false,
  setVisible: (visible) => set({ visible }),
}));
