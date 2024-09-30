import React from 'react';
import classical from '../../../../assets/Genre/classical_music.jpeg';
import disco from '../../../../assets/Genre/disco_music.jpeg';
import electronic from '../../../../assets/Genre/Elecronic_music.jpeg';
import folk from '../../../../assets/Genre/folk_music.jpeg';
import hiphop from '../../../../assets/Genre/HipHop_music.jpeg';
import indierock from '../../../../assets/Genre/indieRoch_music.jpeg';
import instrumental from '../../../../assets/Genre/instrumental_music.jpeg';
import jazz from '../../../../assets/Genre/jazz_music.jpeg';
import pop from '../../../../assets/Genre/pop_music.jpeg';
import { GenreCard } from './GenreCard';

/* Types */
interface Props {}

/* Global Constants & Functions */

export const HomeGenreSection: React.FC<Props> = (props) => {
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
			<h1 className="text-white text-3xl font-bold  mt-2">Genre</h1>
			<div className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 p-4  ">
				<GenreCard pic={classical} genreName="Classical" />
				<GenreCard pic={pop} genreName="Pop" />
				<GenreCard pic={instrumental} genreName="Instrumental" />
				<GenreCard pic={jazz} genreName="Jazz" />
				<GenreCard pic={disco} genreName="Disco" />
				<GenreCard pic={electronic} genreName="Electronic" />
				<GenreCard pic={folk} genreName="Folk" />
				<GenreCard pic={indierock} genreName="Indie Rock" />
				<GenreCard pic={hiphop} genreName="Hip Hop" />
			</div>
		</div>
	);
};
