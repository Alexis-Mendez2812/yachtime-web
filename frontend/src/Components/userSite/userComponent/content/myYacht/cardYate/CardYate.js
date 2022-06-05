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

export const CardYate = ({ yate }) => {
	console.log(yate);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
						<button
							type="button"
							class="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						>
							Editar
						</button>

						<Button size="small">Eliminar</Button>
					</CardActions>
				</Card>
			) : (
				<p>usted no tiene yates en alquiler</p>
			)}
			<div
				class="modal modal-xl fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<NewProduct />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
