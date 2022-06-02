import React from "react";
import { SiInstagram } from "react-icons/si";
import Navbar from "../Navbar/Navbar";
import tarjet from "../Membership/img/business_card.png";
import background from "./img/banner_menber_01.jpg";
import "./Membership.css";
import Footer from "../Footer/Footer";
function Membership() {
	return (
		<>
			<Navbar />

			<div class="about">
				<div>
					<img
						src={background}
						alt="img"
						width="100%"
						height="450px"
					></img>
				</div>
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

					<div class="skills">
						<button>GET IT NOW</button>
					</div>
				</div>
			</div>

			<div>
				<div class="title-cards">
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
									<li>
										<p>Offer your yacht with us.</p>
									</li>
									<li>
										<p>
											You will not pay commissions for
											each charter.
										</p>
									</li>
									<li>
										<p>
											The best yacht's selection of all
											Miami.
										</p>
									</li>
									<li>
										<p>Take advantage of our promos.</p>
									</li>
								</ul>
							</div>
							<a href="/paypal/pay/300">300$ / Annual</a>
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
									<li>
										<p>Offer your yacht with us.</p>
									</li>
									<li>
										<p>
											You will not pay commissions for
											each charter.
										</p>
									</li>
									<li>
										<p>
											The best yacht's selection of all
											Miami.
										</p>
									</li>
									<li>
										<p>Take advantage of our promos.</p>
									</li>
								</ul>
							</div>
							<a href="/paypal/pay/75">75$ / Month</a>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Membership;
