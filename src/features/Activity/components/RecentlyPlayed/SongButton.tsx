import { Button, ButtonProps, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

/* Types */
interface Props {
	children: string;
}

/* Global Constants & Functions */

export const SongButton: React.FC<Props> = (props) => {
	/* Props Destructure */
	const { children } = props;
	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	//style
	const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
		color: theme.palette.getContrastText(purple[500]),
		// backgroundColor: purple[500],
		'&:hover': {
			backgroundColor: purple[500]
		}
	}));

	return <ColorButton fullWidth>{children}</ColorButton>;
};
