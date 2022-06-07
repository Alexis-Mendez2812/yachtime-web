import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../dataUser/dataUser.css";
import "./changeDataUser.css";

export const ChangeDataUser = () => {
	const { email, firtsName, lastName, picture, userName } = useSelector(
		(state) => state.userSession
	);
	const { logout } = useAuth0();
	return (
		<div className="backdataUser">
			<div className="change_DataUser_imgProfile">
				<div className="DataUser_button">
					<Link to="/userSite/changepass">
						<div className=" btnData passwordColor">
							Change Password
						</div>
					</Link>
					<div
						onClick={() =>
							logout({ returnTo: window.location.origin })
						}
						className=" btnData logOutColor"
					>
						Log Out
					</div>
				</div>
				<img src={picture} alt="userPic" />
			</div>
			<div className="changeDataContainer ">
				<div className="animate__animated animate__fadeIn">
					<h1>Change Data User</h1>
				</div>
				<div className="int">
					<form className="change_formContainer animate__animated animate__fadeIn">
						<div>
							<input
								type="text"
								name="firtsName"
								placeholder="Password"
								autoComplete="off"
								value={firtsName}
							/>
							<input
								placeholder="Confirm Password"
								type="text"
								name="lastName"
								value={lastName}
								autoComplete="off"
							/>
						</div>
						<div>
							<input
								placeholder="Confirm Password"
								type="text"
								name="email"
								value={email}
								autoComplete="off"
							/>
							<input
								placeholder="Confirm Password"
								type="text"
								name="userName"
								value={userName}
								autoComplete="off"
							/>
						</div>

						<button className="change_formButton">
							Change Data User
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
