import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div className="">
				<button onClick={loginWithRedirect}>
					<img
						src="https://www.yachtlife.com/static/media/google_icon.795cf39d.svg"
						alt="google"
					></img>
					CONTINUE WITH GOOGLE
				</button>
			</div>
		</>
	);
};
