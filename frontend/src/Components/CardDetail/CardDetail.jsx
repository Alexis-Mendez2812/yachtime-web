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
console.log(yateSelected)
		let picturas = [
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654214651/api-img/mj9ckyiislx5gouumomy.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654212288/api-img/lxx2f2b9lmkbg0lvcyfx.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654209395/api-img/duj29ftdharc66cr3ydd.jpg",
			"https://res.cloudinary.com/yachtimeapp/image/upload/v1654208627/api-img/miihujetknktoqc1cjmi.jpg",
		];
		let main = pictures.shift();
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
							<label className="CardDetail-Released">{`${length}" `}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Beam: </h4>
							<label className="CardDetail-Released">{`${beam}" `}</label>
						</div>
						<div>
							<h4 className="CardDetail-Released">Draft: </h4>
							<label className="CardDetail-Released">{`${draft}" `}</label>
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
							{pictures?.length > 1 &&
								pictures.map((e) => (
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
