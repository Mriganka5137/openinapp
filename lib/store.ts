import { create } from "zustand";
interface StoreProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
}

export const useStore = create<StoreProps>((set) => ({
  visible: false,
  setVisible: (visible) => set({ visible }),
  files: null,
  setFiles: (files) => set({ files }),
}));
