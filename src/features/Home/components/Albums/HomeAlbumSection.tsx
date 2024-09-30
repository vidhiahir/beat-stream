import React from 'react';
import { AlbumCard } from './AlbumCard';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const HomeAlbumSection: React.FC<Props> = (props) => {
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
			<h1 className="text-white text-3xl font-bold  mt-2">Albums for you</h1>
			<div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 p-4  ">
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
				<AlbumCard />
			</div>
		</div>
	);
};
