import React from 'react';
import { HomeAlbumSection } from './Albums/HomeAlbumSection';
import { HomeArtistSection } from './Artists/HomeArtistSection';
import { HomeGenreSection } from './Genre/HomeGenreSection';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const HomeDashBoard: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex flex-row ml-[10.6rem]">
			<div className="flex flex-col min-h-screen min-w-sm bg-dashboard-color">
				<HomeAlbumSection />
				<HomeArtistSection />
				<HomeGenreSection />
			</div>
			{/* <div className="flex flex-col">
				<HomeTrending />
				<HomeCommunityPlaylist />
			</div> */}
		</div>
	);
};
