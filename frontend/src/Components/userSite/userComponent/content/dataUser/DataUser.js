import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./dataUser.css";

export const DataUser = () => {
	const { email, firtsName, lastName, picture } = useSelector(
		(state) => state.userSession
	);
	const { logout } = useAuth0();
	return (
		<div className="DataUser_container animate__animated animate__fadeIn">
			<div className="DataUser_imgProfile">
				<img src={picture} alt="userPic" />
			</div>

			<div className="DataUser_data">
				<h1>
					{firtsName} {lastName}
				</h1>
				<p>{email}</p>
			</div>
			<div className="DataUser_button">
				<Link to="/userSite/changepass">
					<div className=" btnData passwordColor">
						Change Password
					</div>
				</Link>
				<Link to="/userSite/changeUserData">
					<div className=" btnData userDatacolor">
						Change user data
					</div>
				</Link>
				<div
					onClick={() => logout({ returnTo: window.location.origin })}
					className=" btnData logOutColor"
				>
					Log Out
				</div>
			</div>
			<div className="DataUser_stadistics">
				<div className="stadistic_dataUser">estadistica 1</div>
				<div className="stadistic_dataUser">estadistica 2</div>
			</div>
		</div>
	);
};
