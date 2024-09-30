import React from 'react';
import { ArtistCard } from './ArtistCard';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const HomeArtistSection: React.FC<Props> = (props) => {
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
			<h1 className="text-white text-3xl font-bold mt-2">Artists</h1>
			<div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 p-4  ">
				{/* sticky max-w-screen */}
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
				<ArtistCard />
			</div>
		</div>
	);
};
