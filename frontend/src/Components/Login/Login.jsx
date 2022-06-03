import React, { useState } from "react";

import { LoginButton } from "./LoginButton.jsx";

import "./Profile.css";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm.jsx";
import { RegisterForm } from "./RegisterForm.jsx";

function Login() {
	const [login, setLogin] = useState(true);
	const handleLogIn = () => {
		setLogin(!login);
	};
	return (
		<div className={style.LoginSplitScreen}>
			<div className={style.LoginLeft}>
				<div className={style.copy}>
					<h1>Explore bla bla bla</h1>
					<p>
						otra cosa que decir pero mucho mas larga que la de
						arriba
					</p>
					<button onClick={handleLogIn}>Registrase</button>
				</div>
			</div>
			<div className={style.LoginRight}>
				<form>
					<div className={style.copy2}>
						{login ? (
							<>
								<h1>Sing Up</h1>
								<LoginForm />
							</>
						) : (
							<>
								<h1>Register</h1>
								<RegisterForm />
							</>
						)}
					</div>
				</form>
			</div>
		</div>
		// <>
		// 	<div className={style.container}>
		// 		<div className={style.header}>
		// 			<div>
		// 				<div>
		// 					<div>
		// 						<h1>Welcome to Yach Time App</h1>
		// 						<h3>Choose an option to continue</h3>
		// 					</div>
		// 				</div>
		// 				<LoginButton />
		// 				<Link to={"/LoginForm"}>
		// 					<button>CONTINUE WITH YACH COUNT</button>
		// 				</Link>
		// 				<Link to={"/RegisterForm"}>
		// 					<button> REGISTER WITH YACH COUNT</button>
		// 				</Link>
		// 				<Link to={"/"}>
		// 					<button>BACK TO HOME</button>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
}

export default Login;
