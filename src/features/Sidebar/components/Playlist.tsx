import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { ButtonList } from './ButtonList';
import { ListOfPlaylist } from './ListOfPlaylist';
/* Types */
interface Props {}

/* Global Constants & Functions */

export const Playlist: React.FC<Props> = (props) => {
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
			<ButtonList buttonIcon={<AddIcon />}>Add Playlist</ButtonList>
			<ListOfPlaylist />
		</div>
	);
};
