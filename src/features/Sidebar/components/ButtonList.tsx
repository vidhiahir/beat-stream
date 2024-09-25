import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';
/* Types */
interface Props {
	buttonIcon: ReactNode;
	children: String;
}

/* Global Constants & Functions */

export const ButtonList: React.FC<Props> = (props) => {
	/* Props Destructure */
	const { buttonIcon, children } = props;
	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	// styles
	const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
		color: theme.palette.getContrastText(purple[500]),

		'&:hover': {
			backgroundColor: purple[700]
		}
	}));

	return (
		<div className="w-full">
			<CustomButton variant="text" startIcon={buttonIcon} fullWidth>
				{children}
			</CustomButton>
		</div>
	);
};
