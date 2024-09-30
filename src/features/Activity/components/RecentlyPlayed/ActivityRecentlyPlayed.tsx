import React from 'react';
import { VerticalSection } from './VerticalSection';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ActivityRecentlyPlayed: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div>
			<h1 className="text-white text-3xl font-bold  mt-2 bg-light-contrast">Recently Played</h1>
			<div className="flex flex-row overflow-x-auto whitespace-nowrap p-4 bg-light-contrast gap-4">
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
				<VerticalSection />
			</div>
		</div>
	);
};
