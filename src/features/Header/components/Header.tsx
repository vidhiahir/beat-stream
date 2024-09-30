import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
// import AppLogo from '../../../assets/logo/beatStream.png';
import ChatPic from '../../../assets/icons/message.svg';
import ProfilePic from '../../../assets/icons/user-circle.svg';
import FriendsPic from '../../../assets/icons/users.svg';
import { Searchbox } from './Searchbox';
/* Types */
interface Props {}

/* Global Constants & Functions */

export const Header: React.FC<Props> = (props) => {
	/* Props Destructure */

	/* State Variables */

	/* Hooks, Queries & Mutations */

	/* Constant, Refs and Memo Constant */

	/* Helper Functions */

	/* Handlers */

	/* Effects */

	/* Renderers */

	return (
		<div className="flex flex-row justify-between w-full h-1/8 bg-light-contrast fixed">
			<div className="flex flex-row justify-start space-x-4 items-center ml-2">
				<MenuIcon />
				<div>Logo</div>
				<Searchbox />
			</div>
			<div className="flex flex-row justify-start space-x-4 items-center mr-2 ">
				<img src={ChatPic} alt="" />
				<img src={FriendsPic} alt="" />
				<img src={ProfilePic} alt="" />
			</div>
		</div>
	);
};
