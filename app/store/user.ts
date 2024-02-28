import { create } from 'zustand';
import { User } from '../types/types';

type UserStoreState = {
  user: User | undefined;
	setUser: (user: User) => void
	reset: () => void
};

const initialState = {
	user: {
		email: '',
		picture: '',
		username: '',
		userId: ''
	},
}

export const useUserStore = create<UserStoreState>((set) => ({
  ...initialState,
	setUser: (user: User) => set({ user }),
	reset: () => set({ ...initialState }),
}));