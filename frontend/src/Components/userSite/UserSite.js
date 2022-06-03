import React from "react";
import { Route, Routes } from "react-router-dom";
import { DataUser } from "./userComponent/content/DataUser";
import { MyYacht } from "./userComponent/content/MyYacht";
import { UserSidebar } from "./userComponent/sideBar/UserSideBar";
import "./userSite.css";

export const UserSite = () => {
	return (
		<div className="userSiteCont">
			<UserSidebar />
			<>
				<Routes>
					<Route path="data" element={<DataUser />} />
					<Route path="myYacht" element={<MyYacht />} />
				</Routes>
			</>
		</div>
	);
};
