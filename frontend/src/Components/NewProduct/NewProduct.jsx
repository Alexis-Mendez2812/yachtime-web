import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./NewProduct.css";
export default function NewProduct() {
	const [product, setProduct] = useState({
		make: "",
		model: "",
		year: 2000,
		cabins: "",
		bathrooms: "",
		guest: "",
		length: ["", ""],
		lengthUno: "",
		lengthDos: "",
		beam: ["", ""],
		draft: ["", ""],
		fuelCapacity: "",
		waterCapacity: "",
		cruiseVel: "",
		location: "",
		fuelType: "",
		description: "",
		pictures: "",
	});
	const [controller, setController] = useState({});

	const [select, setSelect] = useState([]);

	const dispatch = useDispatch();

	const handleOnSubmit = async function (event) {
		event.preventDefault();
	};
	const handleOnChange = function (event) {
		setProduct({ ...product, [event.target.name]: event.target.value });
		setController(
			validate({ ...product, [event.target.name]: event.target.value })
		);
	};

	return (
		<div className="Form-body">
			<form onSubmit={handleOnSubmit} className="Form-form">
				<div className="Form-div-title">
					<h1 className="Form-title">Import your Ship!</h1>
				</div>
				<div className="Form-div-inputs">
					<div className="Form-div-boxs">
						<label className="Form-label ">Make</label> <br />
							<input
							className="Form-input"
							type="text"
							name="make"
							value={product.make}
							placeholder="SEA RAY/AZIMUT/MERIDIAN"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Model</label> <br />
							<input
							className="Form-input"
							type="number"
							name="model"
							value={product.model}
							placeholder="40/45/70/100/120"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Year</label> <br />
							<input
							className="Form-input"
							type="number"
              min="2000"
              max="2022"
							name="year"
							value={product.year}
							placeholder="2000"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Cabins</label> <br />
							<input
							className="Form-input"
							type="number"
              min="0"
              max="10"
							name="cabins"
							value={product.cabins}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Bathrooms</label> <br />
							<input
							className="Form-input"
							type="number"
							name="bathrooms"
              min="0"
              max="10"
							value={product.bathrooms}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Guest</label> <br />
							<input
							className="Form-input"
							type="number"
              min="0"
              max="50"
							name="guest"
							value={product.guest}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Length</label> <br />
						
            <div className="Form-div-internal">
							<input
              className="Form-input-internal"
							type="number"
							name="lengthUno"
              min="0"
              max="100"
							value={product.lengthUno}
							placeholder="Title"
							onChange={handleOnChange}></input>
							<input
              className="Form-input-internal"
							type="number"
							name="lengthDos"
              min="0"
              max="100"
							value={product.lengthDos}
							placeholder="Title"
							onChange={handleOnChange}></input>
            <label className="Form-label-internal "> {`${product.lengthUno}' ${product.lengthDos}"`}</label> <br />
            </div>
						<label className="Form-label ">Beam</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Draft</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Fuel Capacity</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">WaterCapacity</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Cruise Vel</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Location</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Description</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Pictures</label> <br />
							<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Name *</label> <br />
						<input
							className="Form-input"
							type="text"
							name="name"
							value={product.make}
							placeholder="Title"
							onChange={handleOnChange}
						/>
					</div>
					<div className="Form-div-boxs">
						<label className="Form-label ">Description *</label>
						<br />
						<input
							className="Form-input"
							type="text"
							name="description"
							value={product.description}
							placeholder="Description"
							onChange={handleOnChange}
						/>
					</div>

					<div className="Form-div-boxs">
						<label className="Form-label ">URL Image </label>
						<br />
						<input
							className="Form-input"
							type="text"
							name="background_image"
							value={product.model}
							placeholder="URL Image"
							onChange={handleOnChange}
						/>
					</div>
					<div className="Form-div-boxs">
						<label className="Form-label ">Released</label>


					</div>

					<div className="Form-div-boxs">
						<label className="Form-label ">Rating </label>

						<input
							className="Form-input slider"
							type="range"
							min="0"
							max="5"
							step="0.1"
							id="myRange"
							name="rating"
							value={product.cabins}
							placeholder="Rating"
							onChange={handleOnChange}
						/>
						<output
							id="outrat"
							name="outrat"
							htmlFor="rat"
							className="Form-output"
						>
							{product.cabins || 0}
						</output>
					</div>
					<div className="Form-div-boxs">
						<div className="Form-input-plat">
							{" "}
							<label className="Form-label ">Platforms *</label>
							<br />
						</div>
					</div>
					<div className="Form-div-boxs">
						<label className="Form-label ">Genres *</label>
						<div className="Form-genres-all"></div>
					</div>
					<div className="Form-">
						{/* {controller.button === "button" && (
              <input
                className="Form-fake-button"
                type="button"
                value="CREATE?"
              ></input>
            )} */}
						{controller.button === "button" && (
							<input className="myButton fake" type="button" value="👻"></input>
						)}
						{/* {!controller.button && (
              <button type="submit" className="Form-button">
                CREATE
              </button>
            )} */}
						{!controller.button && (
							<button type="submit" class="myButton">
								🎮
							</button>
						)}
					</div>
				</div>
				<div className="Form-div-controlers">
					{controller.name && (
						<p className="Form-controller">●{controller.name}</p>
					)}

					{controller.description && (
						<p className="Form-controller">●{controller.description}</p>
					)}
					{controller.background_image && (
						<p className="Form-controller">●{controller.background_image}</p>
					)}
					{controller.released && (
						<p className="Form-controller">●{controller.released}</p>
					)}

					{controller.rating && (
						<p className="Form-controller">●{controller.rating}</p>
					)}

					{controller.platforms && (
						<p className="Form-controller">●{controller.platforms}</p>
					)}
					{controller.genres && (
						<p className="Form-controller">●{controller.genres}</p>
					)}
				</div>
			</form>
		</div>
	);
}

export function validate(game) {
	let controller = {};
	//NOMBRE plataformas-generos
	if (!game.name) {
		controller.name = "The name is required";
	} else if (!/^[A-Za-z0-9\s]+$/g.test(game.name)) {
		controller.name = "No special characters, just letters and/or numbers";
	}

	//DESCRIPTION
	if (!game.description) {
		controller.description = "The description is required";
	} else if (game.description.length > 255) {
		controller.description =
			"The description should not be more than 255 characters";
	}

	//background_image https://media.vandal.net/i/1200x630/3-2022/20223112333098_1.jpg
	if (
		!/[-a-zA-Z0-9@:%_.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_.~#?&//=]*)?/gi.test(
			game.background_image
		) &&
		game.background_image !== ""
	) {
		controller.background_image = "Enter valid url";
	} else if (!game.background_image) {
		controller.background_image = "";
	}

	//rating
	if (game.rating > 5 || game.rating < 0) {
		controller.rating = "The rating must be between 0 and 5";
	}

	//platforms
	if (!game.platforms || game.platforms.legth < 1) {
		controller.platforms = "The platforms are required";
	}
	//genres
	if (!game.genres) {
		controller.genres = "The genre is required";
	} else if (game.genres.length > 5) {
		controller.genres = "5 genres at most";
	}

	if (
		controller.name ||
		controller.background_image ||
		controller.genres ||
		controller.rating ||
		controller.platforms ||
		controller.released ||
		controller.description ||
		!game.name ||
		!game.description ||
		!game.platforms ||
		!game.genres
	) {
		controller.button = "button";
	}
	// console.log("controller",controller);
	// console.log("ship",ship)
	return controller;
}
