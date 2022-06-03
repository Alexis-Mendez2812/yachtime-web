import React, { useEffect, useState } from "react";
import logo from "./logo/logoYT.png";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserGoogle } from "../../Redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useAuth0();
	const [isScrolled, setIsScrolled] = useState(false);
	let userSession = useSelector((state) => state.userSession);

	useEffect(() => {
		if (user && user.email) {
			return dispatch(postUserGoogle(user));
		}
	}, [dispatch, user]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleReloadFromLogo = () => {
		navigate("/");
		window.scrollTo(0, 0);
	};

	return (
		<>
			<nav className={isScrolled ? style.navScroll : style.nav}>
				<div className={style.imgYT}>
					<img
						onClick={handleReloadFromLogo}
						src={logo}
						alt="yachtimeLogo"
						className={style.img}
					/>
				</div>

				<div className={style.ulDiv}>
					<ul className={style.ulEnlaces}>
						<li>
							<Link to={"/"} className={style.enlace}>
								Dashboard
							</Link>
						</li>
						<li>
							<Link to={"/membership"} className={style.enlace}>
								Membership
							</Link>
						</li>
						<li>
							<Link to={"/contactUs"} className={style.enlace}>
								contact us
							</Link>
						</li>

						{userSession.email ? (
							<>
								<li>
									<Link
										to={"/userSite/data"}
										className={style.enlace}
									>
										<img
											src={userSession.picture}
											alt="profile"
										/>
									</Link>
								</li>
							</>
						) : (
							<li>
								<Link to={"/login"} className={style.enlace}>
									<i class="fa-solid fa-arrow-right-to-bracket"></i>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
