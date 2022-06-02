import React from "react";
import "./cardCrewBta.css";

export const CardCrewBta = ({ person }) => {
	return (
		<div className="cardCrewBta">
			<div className="cardCrewBta_content">
				<img src={person.imgUrl} alt="img" />
			</div>
			<div className="cardCrewBta_text">
				<h3>{person.name}</h3>
				<br />
				<span>{person.position}</span>
			</div>
			<div className="cardCrewBta_redes">
				<ul className="">
					{person.facebook && (
						<li>
							<a href={person.facebook} target="_blank">
								<i class="fa-brands fa-facebook-f"></i>
							</a>
						</li>
					)}
					{person.instagram && (
						<li>
							<a href={person.instagram} target="_blank">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</li>
					)}
					{person.twitter && (
						<li>
							<a href={person.twitter} target="_blank">
								<i class="fa-brands fa-twitter"></i>
							</a>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};
