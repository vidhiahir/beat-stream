import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ThemeToggle: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */
	const [darkTheme, setDarkTheme] = useState<boolean>(false);
	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */
	const handleToggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDarkTheme(event.target.checked);
	};

	/* Effects */

	/* Renderers */

	return (
		<div>
			<FormControlLabel
				control={<Switch checked={darkTheme} color="secondary" onChange={handleToggleTheme} />}
				label="Dark Theme"
			/>
		</div>
	);
};
