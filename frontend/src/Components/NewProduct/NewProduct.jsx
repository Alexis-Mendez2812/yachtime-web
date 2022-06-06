import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Box, ImageListItem, Button, CircularProgress } from "@mui/material";
import "./NewProduct.css";
import style from "../Uploading/Uploading.module.css";
import { useSelector } from "react-redux";

export default function NewProduct({
	editId,
	editmake,
	editmodel,
	edityear,
	editcabins,
	editbathrooms,
	editguest,
	editlength,
	editlengthUno,
	editlengthDos,
	editbeam,
	editbeamUno,
	editbeamDos,
	editdraft,
	editdraftUno,
	editdraftDos,
	editfuelCapacity,
	editwaterCapacity,
	editcruiseVel,
	editlocation,
	editfuelType,
	editdescription,
	editpictures,
	isEdit,
}) {
	const { id: userId } = useSelector((state) => state.userSession);
	const navigate = useNavigate();
	const [product, setProduct] = useState({
		make: editmake || "",
		model: editmodel || "40",
		year: edityear || "1990",
		cabins: editcabins || "0",
		bathrooms: editbathrooms || "0",
		guest: editguest || "0",
		length: editlength || "",
		lengthUno: editlengthUno || "30",
		lengthDos: editlengthDos || "0",
		beam: editbeam || "",
		beamUno: editbeamUno || "10",
		beamDos: editbeamDos || "0",
		draft: editdraft || "",
		draftUno: editdraftUno || "3",
		draftDos: editdraftDos || "0",
		fuelCapacity: editfuelCapacity || "0",
		waterCapacity: editwaterCapacity || "0",
		cruiseVel: editcruiseVel || "0",
		location: editlocation || "",
		fuelType: editfuelType || "",
		description: editdescription || "",
		pictures: editpictures || [],
	});
	const [controller, setController] = useState({});
	const [charging, setCharging] = useState(false);
	const handleFileClick = () => {
		document.querySelector("#inputFile").click();
	};
	const handleOnChange = function (event) {
		setProduct({ ...product, [event.target.name]: event.target.value });
		setController(
			validate({ ...product, [event.target.name]: event.target.value })
		);
	};
	const handleOnChangeBeam = function (event) {
		if (event.target.name === "beamUno") {
			setProduct({
				...product,
				beamUno: event.target.value,
				beam: `${event.target.value}' ${product.beamDos}`,
			});
			console.log(product.beam);
		}
		if (event.target.name === "beamDos") {
			setProduct({
				...product,
				beamDos: event.target.value,
				beam: `${product.beamUno}' ${event.target.value}`,
			});
			console.log(product.beam);
		}
	};
	const handleOnChangeLength = function (event) {
		if (event.target.name === "lengthUno") {
			setProduct({
				...product,
				lengthUno: event.target.value,
				length: `${event.target.value}' ${product.lengthDos}`,
			});
			console.log(product.length);
		}
		if (event.target.name === "lengthDos") {
			setProduct({
				...product,
				lengthDos: event.target.value,
				length: `${product.lengthUno}' ${event.target.value}`,
			});
			console.log(product.length);
		}
	};
	const handleOnChangeDraft = function (event) {
		if (event.target.name === "draftUno") {
			setProduct({
				...product,
				draftUno: event.target.value,
				draft: `${event.target.value}' ${product.draftDos}`,
			});
			console.log(product.draft);
		}
		if (event.target.name === "draftDos") {
			setProduct({
				...product,
				draftDos: event.target.value,
				draft: `${product.draftUno}' ${event.target.value}`,
			});
			console.log(product.draft);
		}
	};

	const handleDeleteFile = (e) => {
		e.preventDefault();
		setProduct({
			...product,
			pictures: product.pictures.filter((pic) => {
				if (pic !== e.target.value) {
					return pic;
				}
			}),
		});
	};

	const handleFileInputChange = (e) => {
		if (e.target.files[0]) {
			e.preventDefault();
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setProduct({
					...product,
					pictures: [...product.pictures, reader.result],
				});
				setController(
					validate({
						...product,
						pictures: [...product.pictures, reader.result],
					})
				);
			};
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!product.make ||
			product.pictures.length === 0 ||
			!product.description
		) {
			setCharging(false);
			swal("Error!", `Complete todos los campos `, "warning");
		}

		if (isEdit === undefined) {
			console.log("create");
			const user = {
				headers: {
					userId,
				},
			};
			try {
				await axios.post("/products", product, user);
				swal("Exito!", `yacht creado correctamente`, "success");
			} catch (error) {
				console.log(error);
				swal("Error!", `Error al subir yatch `, "warning");
			}
		} else {
			console.log("edit");
			const editId = {
				headers: {
					editId,
				},
			};
			try {
				await axios.put("/products", product, editId);
				swal("Exito!", `yacht Modificado correctamente`, "success");
			} catch (error) {
				console.log(error);
				swal("Error!", `Error al modificar yatch `, "warning");
			}
		}
	};

	if (charging) {
		return (
			<Box
				style={{
					width: "100vw",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CircularProgress color="info" size={100} />;
			</Box>
		);
	} else {
		return (
			<>
				{/* <Link to="/userSite/myYacht">
					<div>
						<div className="change_btn ">Go back</div>
					</div>
				</Link> */}
				<div className="Form-body animate__animated animate__fadeIn">
					<form className="Form-form">
						<div className="Form-div-title">
							{isEdit ? (
								<h1 className="Form-title">
									Edit your Yacth!!
								</h1>
							) : (
								<h1 className="Form-title">
									Create new Yatch!
								</h1>
							)}
						</div>
						<div className="Form-div-inputs">
							<div className="inputContUp">
								<div className="width100">
									<label className="Form-label ">Make</label>{" "}
									<br />
									<input
										className="Form-input"
										type="text"
										name="make"
										value={product.make}
										placeholder="SEA RAY/AZIMUT/MERIDIAN"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">Model</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="40"
										name="model"
										value={product.model}
										placeholder="40/45/70/100/120"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">Year</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="1990"
										max="2023"
										name="year"
										value={product.year}
										placeholder="2000"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">
										Cabins
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="0"
										max="30"
										name="cabins"
										value={product.cabins}
										placeholder="1-2-3...."
										onChange={handleOnChange}
									></input>
								</div>
							</div>
							<div className="inputContUp">
								<div className="width100">
									<label className="Form-label ">
										Bathrooms
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										name="bathrooms"
										min="0"
										max="20"
										value={product.bathrooms}
										placeholder="1-2-3...."
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">Guest</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="0"
										max="50"
										name="guest"
										value={product.guest}
										placeholder="1-2-3...."
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">
										Length
									</label>{" "}
									<br />
									<div className="Form-div-internal">
										<input
											className="Form-input-internal"
											type="number"
											name="lengthUno"
											min="30"
											max="200"
											value={product.lengthUno}
											placeholder="Title"
											onChange={handleOnChangeLength}
										></input>
										<input
											className="Form-input-internal"
											type="number"
											name="lengthDos"
											min="0"
											max="11"
											value={product.lengthDos}
											placeholder="Title"
											onChange={handleOnChangeLength}
										></input>
										<label className="Form-label-internal ">
											{" "}
											{`${product.lengthUno}' ${product.lengthDos}"`}
										</label>{" "}
										<br />
									</div>
								</div>
								<div className="width100">
									<label className="Form-label ">Beam</label>{" "}
									<br />
									<div className="Form-div-internal">
										<input
											className="Form-input-internal"
											type="number"
											name="beamUno"
											min="10"
											max="40"
											value={product.beamUno}
											placeholder="Title"
											onChange={handleOnChangeBeam}
										></input>
										<input
											className="Form-input-internal"
											type="number"
											name="beamDos"
											min="0"
											max="11"
											value={product.beamDos}
											placeholder="Title"
											onChange={handleOnChangeBeam}
										></input>
										<label className="Form-label-internal ">
											{" "}
											{`${product.beamUno}' ${product.beamDos}"`}
										</label>{" "}
										<br />
									</div>
								</div>
							</div>
							<div className="inputContUp">
								<div className="width100">
									<label className="Form-label ">Draft</label>{" "}
									<br />
									<div className="Form-div-internal">
										<input
											className="Form-input-internal"
											type="number"
											name="draftUno"
											min="3"
											max="10"
											value={product.draftUno}
											placeholder="Title"
											onChange={handleOnChangeDraft}
										></input>
										<input
											className="Form-input-internal"
											type="number"
											name="draftDos"
											min="0"
											max="11"
											value={product.draftDos}
											placeholder="Title"
											onChange={handleOnChangeDraft}
										></input>
										<label className="Form-label-internal ">
											{" "}
											{`${product.draftUno}' ${product.draftDos}"`}
										</label>{" "}
										<br />
									</div>
								</div>
								<div className="width100">
									<label className="Form-label ">
										Fuel Capacity
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="0"
										name="fuelCapacity"
										value={product.fuelCapacity}
										placeholder="Title"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">
										WaterCapacity
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="0"
										name="waterCapacity"
										value={product.waterCapacity}
										placeholder="Title"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width100">
									<label className="Form-label ">
										Cruise Vel
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="number"
										min="0"
										name="cruiseVel"
										value={product.cruiseVel}
										placeholder="Title"
										onChange={handleOnChange}
									></input>
								</div>
							</div>
							<div className="inputContUp">
								<div className="width50">
									<label className="Form-label ">
										Location
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="text"
										name="location"
										value={product.location}
										placeholder="Title"
										onChange={handleOnChange}
									></input>
								</div>
								<div className="width50">
									<label className="Form-label ">
										Description
									</label>{" "}
									<br />
									<input
										className="Form-input"
										type="text"
										name="description"
										value={product.description}
										placeholder="Title"
										onChange={handleOnChange}
									></input>
								</div>
							</div>
						</div>
						<div className="Form-div-controlers">
							{controller.make && (
								<p className="Form-controller">
									●{controller.make}
								</p>
							)}
							{controller.pictures && (
								<p className="Form-controller">
									●{controller.pictures}
								</p>
							)}
							{controller.description && (
								<p className="Form-controller">
									●{controller.description}
								</p>
							)}
						</div>
						<label onClick={handleFileClick} className="addButton">
							Add Pictures
						</label>{" "}
						<br />
						<Box className={style.uploadingContainer}>
							<input
								id="inputFile"
								type="file"
								onChange={handleFileInputChange}
								name="image"
								style={{ display: "none" }}
							/>
							<Box className={style.imgContainer}>
								{product.pictures.length > 0 &&
									product.pictures.map((pic, i) => {
										return (
											<ImageListItem
												style={{
													margin: "1vw",
													background: "green",
													display: "flex",
													flexDirection: "column",
												}}
												key={i}
											>
												<button
													onClick={(e) =>
														handleDeleteFile(e)
													}
													value={pic}
													className={
														style.deleteButton
													}
												>
													Delete
												</button>
												<img
													src={pic}
													alt=""
													style={{ width: "10vw" }}
												/>
											</ImageListItem>
										);
									})}
							</Box>
						</Box>
						{!controller.button && (
							<Button
								style={{ marginTop: "0.5vh" }}
								color={isEdit ? "warning" : "success"}
								onClick={handleSubmit}
								variant="contained"
							>
								{isEdit ? "E d i t" : "S U B M I T"}
							</Button>
						)}
						{controller.button && (
							<Button
								style={{ marginTop: "0.5vh" }}
								color="error"
								variant="contained"
							>
								DISABLED
							</Button>
						)}
					</form>
				</div>
			</>
		);
	}
}

export function validate(product) {
	let controller = {};
	console.log(product);
	//DESCRIPTION
	if (!product.make) {
		controller.make = "The make is required";
	}
	if (product.pictures.length === 0) {
		controller.pictures = "The picture is required";
	}
	if (!product.description) {
		controller.description = "The description is required";
	} else if (product.description.length > 400) {
		controller.description =
			"The description should not be more than 400 characters";
	}

	if (controller.make || controller.description || !product.description) {
		controller.button = "button";
	}
	return controller;
}
