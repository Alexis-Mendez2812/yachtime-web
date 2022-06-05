import React from "react";
import { Route, Routes } from "react-router-dom";
import NewProduct from "../NewProduct/NewProduct";
import { ChangeDataUser } from "./userComponent/content/changeDataUser/ChangeDataUser";
import { ChangePass } from "./userComponent/content/changePassword/ChangePass";
import { ChatDetail } from "./userComponent/content/chats/ChatDetail";
import { DataUser } from "./userComponent/content/dataUser/DataUser";
import { MyYacht } from "./userComponent/content/myYacht/MyYacht";
import { UserSidebar } from "./userComponent/sideBar/UserSideBar";
import "./userSite.css";

export const UserSite = () => {
	return (
		<div className="userSiteCont">
			<UserSidebar />
			<div className="dataRouteCont">
				<Routes>
					<Route path="data" element={<DataUser />} />
					<Route path="changepass" element={<ChangePass />} />
					<Route path="changeUserData" element={<ChangeDataUser />} />
					<Route path="myYacht" element={<MyYacht />} />
					<Route path="newproduct" element={<NewProduct />} />
					<Route path="chats" element={<ChatDetail />} />
				</Routes>
			</div>
		</div>
	);
};
