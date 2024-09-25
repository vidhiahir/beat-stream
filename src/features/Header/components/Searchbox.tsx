import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const Searchbox: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */
	const [searchBoxWord, setSearchBoxWord] = useState<string>('');
	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<TextField
			hiddenLabel
			id="input-with-icon-textfield"
			placeholder="Search"
			type="text"
			size="small"
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					)
				}
			}}
			variant="filled"
			value={searchBoxWord}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				setSearchBoxWord(event.target.value);
			}}
		/>
	);
};
