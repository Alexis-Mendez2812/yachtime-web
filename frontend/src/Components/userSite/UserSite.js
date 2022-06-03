import React from "react";
import { ContentRouter } from "./userComponent/content/ContentRouter";
import { UserSidebar } from "./userComponent/sideBar/UserSideBar";
import "./userSite.css";

export const UserSite = () => {
	return (
		<div className="userSiteCont">
			<UserSidebar />
			<ContentRouter />
		</div>
	);
};
