import { create } from 'zustand';
import { UserModel } from '../../types/user';

interface AuthState {
	user: UserModel | null;
	isAuthenticated: boolean;
	login: (user: UserModel) => void;
	logout: () => void;
}
const userAuthStore = create<AuthState>((set) => ({
	user: null,
	isAuthenticated: false,

	login: (user: UserModel) =>
		set({
			user,
			isAuthenticated: true
		}),
	logout: () =>
		set({
			user: null,
			isAuthenticated: false
		})
}));

export default userAuthStore;
