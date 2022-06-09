import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./newPassword.css";
import logo from "../../Navbar/logo/logoYT.png";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";

export const NewPassword = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [forgotPass, setforgotPass] = useState({
		newPassword: "",
		confirmNewPassword: "",
	});
	const { newPassword, confirmNewPassword } = forgotPass;
	const [sendmail, setSendmail] = useState(false);
	const handleEmail = ({ target }) => {
		setEmail(target.value);
	};
	const handleForgotPassword = ({ target }) => {
		setforgotPass({
			...forgotPass,
			[target.name]: target.value,
		});
	};
	const handleSubmitEmail = async (e) => {
		e.preventDefault();
		if (email === "") {
			return;
		}
		Swal.fire({
			title: "Verifying",
			text: "please wait",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const resp = await axios
				.post("/forgot-password", { email })
				.then((data) => data.data);
			console.log("resp", resp);
			if (resp.ok) {
				setSendmail(true);
				Swal.close();
			} else {
				Swal.close();
				swal(
					"Error!",
					`this email is not registered,please try again`,
					"warning"
				);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleSubmitForgotPass = async (e) => {
		e.preventDefault();
		if (newPassword !== confirmNewPassword) {
			swal(
				"Error!",
				`passwords do not match, please try again`,
				"warning"
			);
			return;
		}

		try {
			Swal.fire({
				title: "Verifying",
				text: "please wait",
				allowOutsideClick: false,
				didOpen: () => {
					Swal.showLoading();
				},
			});
			const resp = await axios
				.put("/forgot-password", { newPassword, token })
				.then((data) => data.data);
			if (resp.ok) {
				Swal.close();
				console.log("ok");
				swal(
					"success!",
					`password changed successfully please login again`,
					"success"
				);
				navigate("/login");
			} else {
				Swal.close();
				swal(
					"Error!",
					`expired token please request a new verification email`,
					"warning"
				);
			}
		} catch (error) {
			console.log(error);
		}
		console.log("ok");
	};
	console.log(forgotPass);

	return (
		<div className="passcont">
			<div className="navNewPassword">
				<Link to="/">
					<img src={logo} />
				</Link>
			</div>
			{token === undefined ? (
				<div className="bodyNewPassword">
					{!sendmail ? (
						<>
							<div className="textPassword">
								<h2>Forgot your password?</h2>
								<p>
									Please enter the email you use to sign in to
									YacthTime
								</p>
							</div>
							<form onSubmit={handleSubmitEmail}>
								<label>You email address</label>
								<input
									type="text"
									placeholder="exanple@example.com"
									value={email}
									onChange={handleEmail}
								/>
								<button className="btn btn-primary">
									Submit
								</button>
							</form>
						</>
					) : (
						<div className="recoveryText">
							<h4>
								We send an email with the password recovery link
							</h4>
							<p>Please check your email</p>
						</div>
					)}
				</div>
			) : (
				<div className="bodyNewPassword">
					<div className="textPassword">
						<h2>Change of password</h2>
						<p>please verify the information before sending it</p>
					</div>
					<form onSubmit={handleSubmitForgotPass}>
						<label>New Password</label>
						<input
							type="password"
							name="newPassword"
							value={newPassword}
							onChange={handleForgotPassword}
						/>
						<label>Confirm New Password</label>
						<input
							type="password"
							name="confirmNewPassword"
							value={confirmNewPassword}
							onChange={handleForgotPassword}
						/>
						<button className="btn btn-primary">Submit</button>
					</form>
				</div>
			)}
		</div>
	);
};
