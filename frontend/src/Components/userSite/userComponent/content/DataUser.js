import React from "react";
import { useSelector } from "react-redux";

export const DataUser = () => {
	let userSession = useSelector((state) => state.userSession);
	console.log(userSession);

	return <div></div>;
};
