import React from 'react';
import { Navigate, Outlet } from 'react-router';
import userAuthStore from '../../stores/auth/authStore';
/* Types */
interface Props {}
/* Global Constants & Functions */

export const ProtectedRoutes: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */
	const isAuthenticated = userAuthStore((state) => state.isAuthenticated);
	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
