import { create } from "zustand";

export const useProduct = create((set) => ({
  items: [],
  reels: [],

  addProduct: (product: any) =>
    // TODO: if already is Product, increase quantity, else, add a new item
    set((state: any) => ({
      items: [{ product }],
    })),

  addReel: (reel: any) =>
    // TODO: if already is Product, increase quantity, else, add a new item
    set((state: any) => ({
      reels: [{ reel }],
    })),
}));

export const backState = create((set) => ({
  back: 0,
  setBack: (back: number) =>
    set((state: any) => ({
      back: back,
    })),
}));
