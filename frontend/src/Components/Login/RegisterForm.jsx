import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import toast from "react-hot-toast";
import "./LoginForm.css";

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

export const RegisterForm = () => {
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
		<>
			<form onSubmit={handleSumbit} className="formContainer">
				<input
					onChange={handleInputChange}
					value={input.username}
					placeholder="Email"
					type="text"
					name="username"
					className="input-usuario"
				/>
				{errors.username && <p className="error">{errors.username}</p>}

				<input
					onChange={handleInputChange}
					value={input.password}
					placeholder="Password"
					type="password"
					name="password"
					className="input-usuario"
				/>
				{errors.password && <p className="error">{errors.password}</p>}
				<button className="formButton">Register</button>
			</form>
		</>
	);
};
