import React from 'react';

/* Types */
interface Props {
	pic: any;
	genreName: string;
}

/* Global Constants & Functions */

export const GenreCard: React.FC<Props> = (props) => {
	/* Props Destructure */
	const { pic, genreName } = props;
	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="w-[150px]">
			<img src={pic} alt="Album pic" className="h-[150px] min-w-[150px] object-cover rounded-lg" />
			<div className="text-black mt-2">
				<p className="text-sm text-white">{genreName}</p>
			</div>
		</div>
	);
};
