import React from "react";
import Card from "@mui/material/Card";
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

export const CardYate = ({ yate }) => {
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
						{/* componente modal */}
						<ButtonEdit yate={yate} />
						<Button size="small">Eliminar</Button>
					</CardActions>
				</Card>
			) : (
				<p>usted no tiene yates en alquiler</p>
			)}
		</>
	);
};
