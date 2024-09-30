import React from 'react';
import { Header } from '../../Header/components/Header';
import { Sidebar } from '../../Sidebar/components/Sidebar';
import { HomeDashBoard } from './HomeDashBoard';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const HomePage: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex flex-col ">
			<Header />
			<div className="flex flex-row flex-wrap mt-10 h-7/8 ">
				<Sidebar />
				<HomeDashBoard />
			</div>
		</div>
	);
};
