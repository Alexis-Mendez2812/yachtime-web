import React from "react";
import "./changePass.css";
import { Link } from "react-router-dom";

export const ChangePass = () => {
	return (
		<>
			<Link to="/userSite/data">
				<div>
					<div className="change_btn">Go back</div>
				</div>
			</Link>
			<div className="changePassContainer ">
				<div className="animate__animated animate__fadeIn">
					<h1>Change Password</h1>
				</div>
				<div className="int">
					<form className="change_formContainer animate__animated animate__fadeIn">
						<div>
							<input
								type="password"
								name="Password"
								placeholder="Password"
								autoComplete="off"
							/>
						</div>
						<div>
							<input
								placeholder="Confirm Password"
								type="password"
								name="username"
								autoComplete="off"
							/>
						</div>
						<div>
							<input
								placeholder="New Password"
								type="password"
								name="password"
								autoComplete="off"
							/>
						</div>

						<button className="change_formButton">
							Change Password
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
