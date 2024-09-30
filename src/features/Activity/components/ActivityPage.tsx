import React from 'react';
import { Header } from '../../Header/components/Header';
import { Sidebar } from '../../Sidebar/components/Sidebar';
import { ActivityDashBoard } from './ActivityDashboard';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ActivityPage: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex flex-col h-full w-full">
			<Header />
			<div className="flex flex-row flex-wrap mt-10 h-7/8">
				<Sidebar />
				<ActivityDashBoard />
			</div>
		</div>
	);
};
