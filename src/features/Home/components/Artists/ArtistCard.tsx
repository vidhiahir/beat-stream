import React from 'react';
import ShawnPic from '../../../../assets/artists/shawn.jpeg';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const ArtistCard: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="w-[150px]">
			<img src={ShawnPic} alt="Album pic" className="h-[150px] w-[150px] object-cover rounded-full" />
			<div className="text-black mt-2">
				<p className="text-sm text-white">Shawn Mendes</p>
			</div>
		</div>
	);
};
