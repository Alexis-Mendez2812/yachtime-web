import React, { useEffect, useState } from "react";
import logo from "./logo/logoYT.png";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postUserGoogle } from "../../Redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

function Navbar() {
	const dispatch = useDispatch();
	const { user } = useAuth0();
	const [isScrolled, setIsScrolled] = useState(false);
	let userSession = useSelector((state) => state.userSession);
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
	useEffect(() => {
		if (user?.email) {
			return dispatch(postUserGoogle(user));
		}
	}, [dispatch, user]);

	return (
		<>
			<nav className={isScrolled ? style.navScroll : style.nav}>
				<div className={style.imgYT}>
					<img src={logo} alt="yachtimeLogo" className={style.img} />
				</div>
				<div className={style.ulDiv}>
					<ul className={style.ulEnlaces}>
						<li>
							<Link to={"/"} className={style.enlace}>
								home
							</Link>
						</li>
						<li>
							<Link to={"/membership"} className={style.enlace}>
								membership
							</Link>
						</li>
						<li>
							<Link to={"/contactUs"} className={style.enlace}>
								contact
							</Link>
						</li>
						<li>
							<a
								href="https://www.facebook.com/Yatchtimeapp-104930065485155/"
								className={style.enlace}
							>
								facebook
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y="
								className={style.enlace}
							>
								instagram
							</a>
						</li>
						{userSession.email ? (
							<>
								<li>
									<Link to={"/profile"} className={style.enlace}>
										<img src={userSession.picture} alt="profile"/>
									</Link>
								</li>
							</>
						) : (
							<li>
								<Link to={"/login"} className={style.enlace}>
									login
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
