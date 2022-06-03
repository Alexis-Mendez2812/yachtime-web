import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./loginButton.css";

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div className="google-btn" onClick={loginWithRedirect}>
				<div className="google-icon-wrapper">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
						alt="google"
					></img>
				</div>
				<p className="btn-text"> CONTINUE WITH GOOGLE</p>
			</div>
		</>
	);
};
