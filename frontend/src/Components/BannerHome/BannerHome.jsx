import React, { useState } from "react";
import style from "./BannerHome.module.css";
import { MdOutlineSearch } from "react-icons/md";

function BannerHome() {
	const [state, setState] = useState("Maimi(FL)");
	const handleChange = (event) => {
		setState(event.target.value);
	};
	return (
		<div className={style.bannerHome}>
			<div className={style.banner}>
				<div className={style.bannerText}>
					<h3 className={style.charter}>Charter A Yacht</h3>
					<p>
						<span className={style.city}>
							<br />
							{state}
						</span>
					</p>
				</div>
				<div className={style.select}>
					<div className={style.size}>
						<h3>Location:</h3>
						<select onChange={(event) => handleChange(event)}>
							<option value="select">Select</option>
							<option value="Miami(FL)">Miami</option>
							<option value="Chicago(IL)">Chicago</option>
							<option value="Las Vegas(NV)">Las Vegas</option>
						</select>
					</div>
					<div className={style.duration}>
						<h3>Duration:</h3>
						<select>
							<option value="select">Select</option>
							<option value="Half Day (4hrs)">
								Half Day (4hrs)
							</option>
							<option value="Full Day (8hrs)">
								Full Day (8hrs)
							</option>
							<option value="2-6 Days">2-6 Days</option>
							<option value="7 Days or More">
								7 Days or More
							</option>
						</select>
					</div>
					<div className={style.iconSearch}>
						<MdOutlineSearch />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannerHome;
