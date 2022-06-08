import React from "react";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import {
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import "./cardYate.css";
import NewProduct from "../../../../../NewProduct/NewProduct";
import { ButtonEdit } from "../buttonEdit/ButtonEdit";
import {
	deleteYacht,
	getAllProducts,
} from "../../../../../../Redux/Actions/ProductActions/getAllProducts";
import { Link } from "react-router-dom";

export const CardYate = ({ yate }) => {
	const dispatch = useDispatch();
	const handleDeleteYacht = (id) => {
		console.log(id);
		dispatch(deleteYacht(id));
		// dispatch(getAllProducts());
		console.log("done");
	};
	return (
		<>
			{yate ? (
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						className="cardYate-img"
						component="img"
						height="140"
						image={yate.pictures[0]}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{yate.model} {yate.make}
						</Typography>
					</CardContent>
					<CardActions>
						<Link to={`/usersite/newproduct/${yate.id}`}>Edit</Link>
						<Button onClick={()=>handleDeleteYacht(yate.id)} size="small">
							Eliminar
						</Button>
					</CardActions>
				</Card>
			) : (
				<p>usted no tiene yates en alquiler</p>
			)}
		</>
	);
};
