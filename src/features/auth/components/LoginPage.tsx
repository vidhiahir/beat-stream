import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthServiceInstance } from '../../../services/auth/AuthService';
import userAuthStore from '../../../stores/auth/authStore';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const LoginPage: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */
	const login = userAuthStore((state) => state.login);
	const [logInEmail, setLogInEmail] = useState<string>('');
	const [logInPassword, setLogInPassword] = useState<string>('');

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	const handleLoginSubmit = async () => {
		const respUser = await AuthServiceInstance.login(logInEmail, logInPassword);
		login(respUser);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLogInEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLogInPassword(e.target.value);
	};

	/* Effects */

	/* Renderers */

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<form onSubmit={handleLoginSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
				<h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

				<label className="block text-gray-700 mb-2">Email</label>
				<input
					type="email"
					onChange={handleEmailChange}
					value={logInEmail}
					className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
					required
				/>

				<label className="block text-gray-700 mb-2">Password</label>
				<input
					type="password"
					onChange={handlePasswordChange}
					value={logInPassword}
					className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
					required
				/>

				<button type="submit" className="w-full bg-green-600 text-white rounded-md py-2 hover:bg-green-700 transition">
					Log In
				</button>

				<p className="text-center mt-4">
					Don't have an account?
					<Link to="/signup" className="text-green-600 font-semibold">
						{' '}
						Sign Up
					</Link>
				</p>
			</form>
		</div>
	);
};
