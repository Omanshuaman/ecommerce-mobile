import { create } from "zustand";

export const useProduct = create((set) => ({
  items: [],

  addProduct: (product: any) =>
    // TODO: if already is Product, increase quantity, else, add a new item
    set((state: any) => ({
      items: [{ product }],
    })),

  resetProduct: () => set({ items: [] }),
}));
