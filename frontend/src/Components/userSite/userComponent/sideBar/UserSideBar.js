import React from "react";
import { Link } from "react-router-dom";
import "./userSideBar.css";
import logo from "../../../Navbar/logo/logoYT.png";

export const UserSidebar = () => {
	return (
		<div id="viewport">
			{/* <!-- Sidebar --> */}
			<div id="sidebar">
				<header className="imgYTw">
					<img src={logo} alt="yachtimeLogo" className="imgw " />
				</header>
				<ul className="nav">
					<li>
						<Link to="/userSite/data">Dashboard</Link>
					</li>
					<li>
						<Link to="/userSite/myYacht">My Yacht</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
