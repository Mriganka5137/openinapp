import { create } from "zustand";
interface StoreProps {
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
  data: CsvData[] | null;
  setData: (data: CsvData[]) => void;
  columns: string[] | null;
  setColumns: (columns: string[]) => void;
  values: string[][] | null;
  setValues: (values: string[][]) => void;
}

export interface CsvData {
  // Define the structure of your CSV data
  id: number;
  links: string;
  prefix: string;
  selectTags: string;
  selectedTags: string;
}

export const useStore = create<StoreProps>((set) => ({
  submitted: false,
  setSubmitted: (submitted) => set({ submitted }),
  data: [],
  setData: (data) => set({ data }),
  columns: [],
  setColumns: (columns) => set({ columns }),
  values: [],
  setValues: (values) => set({ values }),

  visible: false,
  setVisible: (visible) => set({ visible }),
  files: null,
  setFiles: (files) => set({ files }),
}));
