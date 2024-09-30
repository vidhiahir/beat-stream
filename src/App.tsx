import React from 'react';

import { Route, Routes } from 'react-router';
import { ActivityPage } from './features/Activity/components/ActivityPage';
import { HomePage } from './features/Home/components/HomePage';
import { LoginPage } from './features/auth/components/LoginPage';

/* Types */
interface Props {}

/* Global Constants & Functions */
const MAX_VAL = 400;

export const App: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */
	// const navigate = useNavigate();

	/* Helper Functions */

	/* Handlers */

	/* Effects */
	// remaining thing: to redirect to home page when already logged in person try to access login page

	/* Renderers */

	return (
		<div className="h-screen w-screen bg-dashboard-color">
			{/* <button onClick={() => setAuthType(AuthType.LOGIN)}>Login</button>
				{role === UserRole.THEDON ? <button onClick={() => setAuthType(AuthType.SIGNUP)}>Register</button> : null} */}

			<Routes>
				{/* unprotected Routes */}
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element />

				{/* protected Routes */}
				{/* <Route element={<ProtectedRoutes />}> */}
				<Route path="/home" element={<HomePage />} />
				<Route path="/activity" element={<ActivityPage />} />

				{/* <Route path="/chat" element={<Chat/>} /> */}
				{/* </Route> */}

				{/* fallback path-page not found 404 */}
				<Route path="*" element />
			</Routes>
		</div>
	);
};

export default App;
