import { UserModel } from '../../types/user';

class AuthService {
	login = async (email: string, password: string) => {
		// api call using axios
		// axios.get('./');
		const resp = {} as UserModel;

		return resp;
	};
}

export const AuthServiceInstance = new AuthService();
