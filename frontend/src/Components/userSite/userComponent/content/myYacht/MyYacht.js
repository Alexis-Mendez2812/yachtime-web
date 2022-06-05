import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardYate } from "./cardYate/CardYate";
import "./myYacht.css";

export const MyYacht = () => {
	const allYates = useSelector((state) => {
		return state.allYates;
	});
	return (
		<div>
			<div className="card_yates_container">
				{allYates?.map((yate) => (
					<CardYate key={yate.id} yate={yate} />
				))}
			</div>
		</div>
	);
	// <Link to="/userSite/newproduct">Crear nuevo yate</Link>;
};
