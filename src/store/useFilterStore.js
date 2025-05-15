import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filters: {
    minPrice: 0,
    gender: [],
    size: [],
    color: [],
    category: [],
  },

  updateFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  toggleFilterValue: (key, value) =>
    set((state) => {
      const current = state.filters[key];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return {
        filters: {
          ...state.filters,
          [key]: updated,
        },
      };
    }),
}));
