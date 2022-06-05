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
					<Link to="/">
						<img src={logo} alt="yachtimeLogo" className="imgw " />
					</Link>
				</header>
				<ul className="nav">
					<li>
						<Link to="/userSite/data">
							<i class="fa-solid fa-ellipsis-vertical"></i>
							Profile
						</Link>
					</li>
					<li>
						<Link to="/userSite/myYacht">
							<i class="fa-solid fa-sailboat"></i>My Yacht
						</Link>
					</li>
					<li>
						<Link to="/userSite/myYacht">
							<i class="fa-solid fa-comments"></i>
							Chats
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
