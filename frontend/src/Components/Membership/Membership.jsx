import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import background from "./img/banner_menber_01.jpg";
import "./Membership.css";
import Footer from "../Footer/Footer";
import { Box, Modal } from "@material-ui/core";
import { ButtonGet, ButtonBox } from "./styledComponents";
import CheckoutBut from "../PayPal/PayPal";

function Membership() {
	// -----> modal 1
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// ------> modal 2
	const [modal2, setModal2] = useState(false);
	const handleOpenModal2 = () => setModal2(true);
	const handleCloseModal2 = () => setModal2(false);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};
	// ------> end modal
	return (
		<>
			<Navbar />

			<div class="about">
				<div className="aboutImg"></div>
				<div class="inner-section">
					<h1 className="how">How To Join</h1>
					<p class="text">
						Yachtimeapp welcomes all people who love being on the
						water, no matter where they are in the world.
					</p>
					<p class="text">
						Each prospective member is asked to submit a simple
						application and will have a phone call with our
						membership specialist to review their yacht charter
						patterns and upcoming needs to ensure a mutual fit.
					</p>
					<a href="#paid">
						<ButtonBox id="paid">
							<ButtonGet>GET IT NOW</ButtonGet>
						</ButtonBox>
					</a>
				</div>
			</div>

			<div>
				<div id="paid" class="title-cards">
					<h1 className="titulo">Our Memberships</h1>

					<p class="text">
						Yachttimeapp offers three membership tiers. Members pay
						a one-time initiation fee and an annual fee to access a
						suite of benefits including:
					</p>
				</div>
				<div class="container-card">
					<div class="card">
						<div class="contenido-card">
							<h2 className="listah2">ANNUAL</h2>
							<p>
								Individuals that typically entertain family and
								friends or clients on single day charters
								throughout the year.
							</p>
							<div>
								<ul className="listaul">
									<li style={{ listStyle: "none" }}>
										<p>Offer your yacht with us.</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>
											You will not pay commissions for
											each charter.
										</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>
											The best yacht's selection of all
											Miami.
										</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>Take advantage of our promos.</p>
									</li>
								</ul>
							</div>
							<button
								className="btn-purchase"
								onClick={handleOpen}
							>
								300$ / Annual
							</button>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<Box sx={style}>
									<CheckoutBut totalPrice="300" />
								</Box>
							</Modal>
						</div>
					</div>
					<div class="card">
						<div class="contenido-card">
							<h2 className="listah2">MONTHLY</h2>
							<p>
								Individuals that typically entertain family and
								friends or clients on single day charters
								throughout the year.
							</p>
							<div>
								<ul className="listaul">
									<li style={{ listStyle: "none" }}>
										<p>Offer your yacht with us.</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>
											You will not pay commissions for
											each charter.
										</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>
											The best yacht's selection of all
											Miami.
										</p>
									</li>
									<li style={{ listStyle: "none" }}>
										<p>Take advantage of our promos.</p>
									</li>
								</ul>
							</div>
							<button
								className="btn-purchase"
								onClick={handleOpenModal2}
							>
								75$ / Month
							</button>
							<Modal
								open={modal2}
								onClose={handleCloseModal2}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<Box sx={style}>
									<CheckoutBut totalPrice="75" />
								</Box>
							</Modal>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Membership;
