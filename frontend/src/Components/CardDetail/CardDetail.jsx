import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";
import Carousel from "react-material-ui-carousel";
import {
	Picture,
	PictureShadow,
	DataGraphy,
	FeatureBox,
	IconBox,
	DataTitle,
	Li,
	CarPic,
	DetailBox,
	DataPictureBox,
	MessageButton,
	TextBox,
	BackIcon,
} from "./styledComponents";
import { Box } from "@mui/material";
import { getIdYate, vaciar } from "../../Redux/Actions/actions";

export default function GameDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let { yateSelected, userSession } = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		dispatch(getIdYate(id));
		dispatch(vaciar());
	}, []);

	const handleGoBack = () => {
		navigate("/");
	};

	const handleGoToMembership = () => {
		navigate("/membership");
	};

	if (!Object.keys(yateSelected).length) {
		return <Loading />;
	} else {
		const {
			year,
			length,
			guests,
			beam,
			bathrooms,
			cabins,
			draft,
			cruiseVel,
			fuelCapacity,
			fuelType,
			waterCapacity,
			description,
			pictures,
		} = yateSelected;
		return (
			<>
				<div clasName="div-Navbar">
					<Navbar />
				</div>
				<Picture
					style={{
						backgroundImage: `url(${yateSelected.pictures[0]})`,
					}}
				>
					<PictureShadow>
						<IconBox>
							<BackIcon onClick={handleGoBack} />
						</IconBox>
						<DataPictureBox className="animate__animated animate__fadeIn">
							<DataGraphy>
								{yateSelected.model}' {yateSelected.make}
							</DataGraphy>

							{userSession.role === "ROLE_PRIME" ? (
								<MessageButton>Contact The Owner</MessageButton>
							) : (
								<MessageButton onClick={handleGoToMembership}>
									Get MemberShip
								</MessageButton>
							)}
						</DataPictureBox>
					</PictureShadow>
				</Picture>
				<Box
					className="box_feature animate__animated animate__fadeIn animate__delay-1s"
					style={{ display: "flex" }}
				>
					<FeatureBox style={{ width: "50vw" }}>
						<DataTitle>Features</DataTitle>
						<DetailBox>
							<Li>Year: {year}</Li>
							<Li>Beam: {beam}</Li>
							<Li>Length: {length}</Li>
							<Li>Guests: {guests}</Li>
							<Li>Toilets: {bathrooms}</Li>
							<Li>Cabins: {cabins}</Li>
							<Li>Draft: {draft}</Li>
							<Li>Cruise Velocity: {cruiseVel}</Li>
							<Li>Fuel Capacity: {fuelCapacity}</Li>
							<Li>Fuel Type: {fuelType}</Li>
							<Li>Water Capacity: {waterCapacity}</Li>
						</DetailBox>
					</FeatureBox>
					<FeatureBox style={{ width: "50vw" }}>
						<DataTitle>Description</DataTitle>
						<TextBox>{description}</TextBox>
					</FeatureBox>
				</Box>
				<Box
					style={{
						width: "100vw",
						height: "70vh",
					}}
				>
					<Carousel interval={3500} animation="slide" duration={800}>
						{pictures.map((item, index) => {
							return (
								<CarPic
									key={index}
									style={{ backgroundImage: `url(${item})` }}
								/>
							);
						})}
					</Carousel>
				</Box>
			</>
		);
	}
}
