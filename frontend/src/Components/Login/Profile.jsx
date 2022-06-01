import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { postUserGoogle } from "../../Redux/Actions/actions";
import  "./Profile.css"
import {LogoutButton} from "./LogoutButton.jsx"
import { Link } from "react-router-dom";
import CheckoutBut from "../PayPal/PayPal";

export const Profile = () => {
	const dispatch = useDispatch();
	const { user } = useAuth0();
	let userSession = useSelector((state) => state.userSession);
// console.log(user)
	// useEffect(() => {
	//   if(user.email){
	//     dispatch(getFavoritesCharacters(user.email))
	//   }
	// }, [user]);

	useEffect(() => {
		if (user?.email) {
			return dispatch(postUserGoogle(user));
		}
	}, [dispatch, user]);

	return userSession?.email ? (
		<div className="Conteiner-Card">

		<div className="Profile-Card">
			<div>
				<img src={userSession.picture} alt={userSession.name} />
			</div>
			<div>
				<h2>User Name:</h2>
				<h4>{userSession.userName}</h4>
				<h2> Name:</h2>
				<h4>{userSession.firtsName}</h4>
				<h2>{userSession.lastName}</h2>
				<h4>Email: {userSession.email}</h4>
				<Link to={"/newproduct"} ><button>NEW CHARTER</button></Link>
				<Link to={"/admin"} ><button>ADMIN</button></Link>
				<LogoutButton/>
				<CheckoutBut totalPrice={15} items={1} totalItems={1} />
				<CheckoutBut totalPrice={100} items={1} totalItems={1} />
			</div>
		</div>
		</div>
	) : (
		<Loading />
	);
};
