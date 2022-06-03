import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getIdYate, vaciar } from "../../Redux/Actions/actions";
import "./CardDetail.css";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import {
	AllCardsContainer,
	CardDetail,
	DataGraphy,
	ChargingContainer,
	TextBoxDet,
} from "../CardHomeYate/StyledComponents";

export default function GameDetail() {
	const history = useNavigate();
	const { id } = useParams();
	// console.log(id)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getIdYate(id));
		return function vaciado() {
			dispatch(vaciar());
		};
	}, []);
	const handleVaciar = function () {
		dispatch(vaciar());
		history("/");
	};
	let yateSelected = useSelector((state) => state.yateSelected);

	if (Object.keys(yateSelected).length) {
		const {
			id,
			make,
			model,
			year,
			cabins,
			bathrooms,
			guests,
			length,
			beam,
			draft,
			fuelCapacity,
			waterCapacity,
			cruiseVel,
			location,
			fuelType,
			pictures,
			description,
		} = yateSelected;

		let picturas = [
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654214651/api-img/mj9ckyiislx5gouumomy.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654212288/api-img/lxx2f2b9lmkbg0lvcyfx.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654209395/api-img/duj29ftdharc66cr3ydd.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654208627/api-img/miihujetknktoqc1cjmi.jpg",
		];
		let main = picturas.shift();
		return (
			<>
				<div clasName="div-Navbar">
					<Navbar />
				</div>
				<div className="CardDetail-body">
					<div className="CardDetail-conteiner-img">
				<CardDetail
							style={{
								backgroundImage: `url(${
									main	})`,
							}}
						>
							<TextBoxDet>
								<DataGraphy>
						<h1 className="CardDetail-h1">{`${model}' ${make}`}</h1>
								</DataGraphy>
							</TextBoxDet>
						</CardDetail>
						{/* <img className="CardDetail-imgMain" src={main} alt={main} /> */}

					</div>
					<div className="CardDetail-conteiner">
						<div>
							<h4 className="CardDetail-span">Year: </h4>
							<label className="CardDetail-rating">{year}</label>
							<br />
						</div>

						<div>
							<h4 className="CardDetail-Released">Cabins: </h4>
							<label className="CardDetail-Released">{cabins}</label>
						</div>

						<div>
							<h4 className="CardDetail-Released">Bathrooms: </h4>
							<label className="CardDetail-Released">{bathrooms}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Guests: </h4>
							<label className="CardDetail-Released">{guests}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Length: </h4>
							<label className="CardDetail-Released">{`${length[0]}' ${
								length.length > 1 ? length[1] : 0
							}" `}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Beam: </h4>
							<label className="CardDetail-Released">{`${beam[0]}' ${
								beam.length > 1 ? beam[1] : 0
							}" `}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Draft: </h4>
							<label className="CardDetail-Released">{`${draft[0]}' ${
								draft.length > 1 ? draft[1] : 0
							}" `}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Fuel Capacity: </h4>
							<label className="CardDetail-Released">{`${fuelCapacity} GAL`}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Water Capacity: </h4>
							<label className="CardDetail-Released">{`${waterCapacity} GAL`}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Cruise Vel: </h4>
							<label className="CardDetail-Released">{`${cruiseVel} KNOTS`}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Fuel Type: </h4>
							<label className="CardDetail-Released">{`${
								fuelType || "gasoline"
							}`}</label>
						</div>

						<div className="CardDetail-label">
							<h4 className="CardDetail-span">Description: </h4>
							<label className="CardDetail-label">{description}</label>
						</div>
						<div className="CardDetail-galery">
							{picturas?.length > 1 &&
								picturas.map((e) => (
									<img className="CardDetail-galery-img" src={e} alt={e} />
								))}
						</div>
					</div>
				</div>
			</>
		);
	}
	return <Loading />;
}
/*
{
"id": "eca6a2ee-4a9f-4896-9948-9eefd453cbd9",
"make": "AZIMUT",
"model": 70,
"year": 2012,
"cabins": 4,
"bathrooms": 3,
"guests": 8,
"length": [
70
],
"beam": [
18
],
"draft": [
6
],
"fuelCapacity": 0,
"waterCapacity": 0,
"cruiseVel": 25,
"location": null,
"fuelType": "gasoline",
"description": "The Azimut 70's 22 metres of hull length seem endless in a photograph... and it appears even larger in the water, elegantly reflecting the grace with which it was designed. A revolution that continues to provide new thrills. This sense of grandeur is amplified, when admiring the unprecedented design of the windows that designer Stefano Righini, intended to be extreme. They are as tall and wide as they are extreme, with a surface of over 15 square metres.",
"pictures": null,
"createdAt": "2022-05-31T20:41:05.164Z",
"updatedAt": "2022-05-31T20:41:05.164Z"
} */
