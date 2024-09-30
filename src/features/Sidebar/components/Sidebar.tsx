import ActivityIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home'; /* Types */
import React from 'react';
import { ButtonList } from './ButtonList';
import { Playlist } from './Playlist';
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
		<div className="flex h-screen flex-col justify-between bg-light-contrast w-1/6 fixed z-50">
			<div className="flex flex-col items-center">
				<ThemeToggle />
				<ButtonList buttonIcon={<HomeIcon />}>Home</ButtonList>
				<ButtonList buttonIcon={<ActivityIcon />}>Activity</ButtonList>
			</div>
			<div className="flex flex-col items-center">
				<Playlist />
			</div>
		</div>
	);
};
