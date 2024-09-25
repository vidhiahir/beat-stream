import ActivityIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home'; /* Types */
import React from 'react';
import { ButtonList } from './ButtonList';
import { ThemeToggle } from './ThemeToggle';
interface Props {}

/* Global Constants & Functions */

export const Sidebar: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex h-screen flex-col justify-between bg-light-contrast w-1/6 ">
			<div className="flex flex-col items-center">
				<ThemeToggle />
				<ButtonList buttonIcon={<HomeIcon />}>Home</ButtonList>
				<ButtonList buttonIcon={<ActivityIcon />}>My Activity</ButtonList>
			</div>
			<div className="flex flex-col items-center">
				<div>add playlist</div>
			</div>
		</div>
	);
};
