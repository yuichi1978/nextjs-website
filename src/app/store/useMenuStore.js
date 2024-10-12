import { create } from "zustand";

export const useMenuStore = create((set) => ({
  // isOpenとはメニューが閉じるか開くかの状態管理のこと
  isOpen: false,
  // 初期値はfalseで！で反転するのでtrueに代わる
  openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMobileMenu: () => set({ isOpen: false }),
}));
