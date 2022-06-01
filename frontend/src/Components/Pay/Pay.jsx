import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import CheckoutBut from "../PayPal/PayPal";


export default function GameDetail() {
	const history = useNavigate();
	const { mount } = useParams();
	console.log(mount)
	
	
	
	return (<>
    <CheckoutBut totalPrice={mount} items={1} totalItems={1} />
    </>);
	// return <Loading/>;
}