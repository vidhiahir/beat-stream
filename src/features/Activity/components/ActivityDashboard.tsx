import React from 'react';
import { ActivityLikedMusicCard } from './ActivityLikedMusicCard';
import { ActivityListenLaterCard } from './ActivityListenLaterCard';
import { ActivityFollowingArtist } from './FollowingArtists/ActivityFollowingArtist';
import { ActivityRecentlyPlayed } from './RecentlyPlayed/ActivityRecentlyPlayed';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ActivityDashBoard: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex flex-col ml-[10.7rem] min-h-screen min-w-sm bg-dashboard-color">
			<ActivityRecentlyPlayed />
			<div className="flex flex-row">
				<ActivityLikedMusicCard />
				<ActivityListenLaterCard />
			</div>
			<ActivityFollowingArtist />
		</div>
	);
};
