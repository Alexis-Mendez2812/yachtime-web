import React, { useState } from "react";

import "./Profile.css";
import style from "./Login.module.css";
import { LoginForm } from "./LoginForm.jsx";
import { RegisterForm } from "./RegisterForm.jsx";
import { Link } from "react-router-dom";

function Login() {
	const [login, setLogin] = useState(true);
	const handleLogIn = () => {
		setLogin(!login);
	};
	return (
		<div className={style.LoginSplitScreen}>
			<div className={style.LoginLeft}>
				<div className={style.goBackLogin}>
					<Link to="/">
						<i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
						Go back
					</Link>
				</div>
				<div className={style.copy}>
					<h1>Are you new here?</h1>
					<p>
						This will be the best experience you will have. What are
						you waiting for?
					</p>
					<button className={style.btn} onClick={handleLogIn}>
						{login ? "Sing Up" : "Log In"}
					</button>
				</div>
			</div>
			<div className={style.LoginRight}>
				<div className={style.copy2}>
					{login ? (
						<>
							<LoginForm />
						</>
					) : (
						<>
							<RegisterForm />
						</>
					)}
				</div>
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
