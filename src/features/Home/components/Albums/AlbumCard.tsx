import React from 'react';
import AlbumPic from '../../../../assets/artists/Taylor Swift - Lover _ wallpaper.jpeg';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const AlbumCard: React.FC<Props> = (props) => {
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
			<img src={AlbumPic} alt="Album pic" className="h-[150px] w-[150px] object-cover rounded-lg" />
			<div className="text-black mt-2">
				<p className="font-bold text-lg">Lover</p>
				<p className="text-sm text-white">Taylor Swift</p>
			</div>
		</div>
	);
};
