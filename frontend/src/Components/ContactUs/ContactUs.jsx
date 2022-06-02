import React from "react";
import { SiInstagram } from "react-icons/si";
import style from "./ContactUs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ContactUs() {
	return (
		<>
			<Navbar />

			<div className="container">
				<div className="ContactUs">
					<div class="contact-wrapper animated bounceInUp">
						<div class="contact-form">
							<h1 className="ContactUs">Contact</h1>
							<div className="data">
								<h3>+1 786-721-2525</h3>
								<p>3300 NW 21st St, Miami, FL 33142</p>
								<p>Estados Unidos</p>
								<br></br>
							</div>
							<div className="divUbicacion">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2598245325494!2d-80.25231148565965!3d25.79500091351838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb1cd85cc52f%3A0x6c3c779175916b87!2sYachtime%20Miami!5e0!3m2!1ses!2sar!4v1653417999814!5m2!1ses!2sar"
									width="600"
									height="300"
									style={{ border: "0" }}
									allowFullScreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<br></br>
				<br></br>
			</div>
			<Footer />
		</>
	);
}

export default ContactUs;
