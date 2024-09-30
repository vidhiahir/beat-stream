import { Button, ButtonProps, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ListOfPlaylist: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	//style
	const PlayListListButton = styled(Button)<ButtonProps>(({ theme }) => ({
		color: theme.palette.getContrastText(purple[500]),

		'&:hover': {
			backgroundColor: purple[700]
		}
	}));

	return (
		<div className="width-full">
			{/* //write a fetch detail */}
			<PlayListListButton size="small" fullWidth>
				Small
			</PlayListListButton>
			<PlayListListButton size="small" fullWidth>
				Small
			</PlayListListButton>
			<PlayListListButton size="small" fullWidth>
				Small
			</PlayListListButton>
		</div>
	);
};
