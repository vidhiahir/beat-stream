import React from 'react';
import Liked_music from '../../../assets/liked_music.jpeg';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ActivityLikedMusicCard: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="w-[162px] mt-4">
			<img src={Liked_music} alt="" className="h-[162px] w-[162px] object-cover rounded-lg" />
			<p className="text-md font-semibold text-white">Liked Music</p>
		</div>
	);
};
