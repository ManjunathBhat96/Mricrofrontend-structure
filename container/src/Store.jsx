import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  count: 0,
  setCount: (value) => set({ count: value }),
}));
