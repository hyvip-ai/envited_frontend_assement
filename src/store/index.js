import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useEventStore = create(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, { ...event }] })),
      updateEvent: (events) => set((state) => ({ events })),
    }),
    {
      name: 'events',
    }
  )
);
