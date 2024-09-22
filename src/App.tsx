import React from 'react';
import { Route, Routes } from 'react-router';

import { LoginPage } from './features/auth/components/LoginPage';
import { HomePage } from './features/dashboard/components/HomePage';
import { ProtectedRoutes } from './Routes/components/ProtectedRoutes';
import userAuthStore from './stores/auth/authStore';

/* Types */
interface Props {}

/* Global Constants & Functions */
const MAX_VAL = 400;

export const App: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */
	const authenticatedUser = userAuthStore((state) => state.user);
	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */
	// const navigate = useNavigate();

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div>
			{/* <button onClick={() => setAuthType(AuthType.LOGIN)}>Login</button>
			{role === UserRole.THEDON ? <button onClick={() => setAuthType(AuthType.SIGNUP)}>Register</button> : null} */}

			<Routes>
				{/* unprotected Routes */}
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element />

				{/* protected Routes */}
				<Route element={<ProtectedRoutes />}>
					<Route path="/home" element={<HomePage />} />
					<Route path="/something" element />
				</Route>

				{/* fallback path-page not found 404 */}
				<Route path="*" element />
			</Routes>
		</div>
	);
};
export default App;
