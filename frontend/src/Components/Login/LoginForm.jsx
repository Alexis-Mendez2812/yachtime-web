import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./LoginForm.css";
import { LoginButton } from "./LoginButton";

export function validate(input) {
	let errors = {};
	console.log(errors);

	if (!input.username) {
		errors.username = "Username is required";
	} else if (!/\S+@\S+\.\S+/.test(input.username)) {
		errors.username = "Username is invalid";
	}
	if (!input.password) {
		errors.password = "Password is required";
	} else if (!/(?=.-*[0-9])/.test(input.password)) {
		errors.password = "Password is invalid";
	}
	return errors;
}

export const LoginForm = () => {
	const [input, setInput] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = function (e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSumbit = async (e) => {
		try {
			e.preventDefault();
			if (Object.keys(errors).length > 0) {
				toast.error("Debes completar correctamente los campos.");
			}
		} catch (e) {
			console.log(e);
			toast.error("Contraseña o usuario incorrecto.");
		}
	};

	return (
		<div className="animate__animated animate__fadeInRight">
			<h1>Log In!</h1>
			<LoginButton />
			<h1 className="loginFormOr">OR</h1>
			<form onSubmit={handleSumbit} className="formContainer">
				<input
					onChange={handleInputChange}
					value={input.username}
					placeholder="Email"
					type="text"
					name="username"
					autoComplete="off"
				/>
				{errors.username && <p className="error">{errors.username}</p>}

				<input
					onChange={handleInputChange}
					value={input.password}
					placeholder="Password"
					type="password"
					name="password"
				/>
				{errors.password && <p className="error">{errors.password}</p>}
				<button className="formButton">Log In</button>

				<div className="formLinks">
					<Link id="olv-ct" to={"/PasswordReset"}>
						Forgot your password?
					</Link>
				</div>
			</form>
		</div>
	);
};
