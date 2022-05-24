import React, { useState } from "react";
import style from "./BannerHome.module.css";
import { MdOutlineSearch } from "react-icons/md"

function BannerHome() {
  const [state , setState] = useState("Maimi(FL)")
  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <div className={style.bannerHome}>
      <div className={style.banner}>
        <span className={style.city}>{state}</span>
        <div className={style.select}>
          <div className={style.size}>
            <h3>Size:</h3>
            <select onChange={(event) => handleChange(event)}>
              <option value="Miami(FL)">Miami</option>
              <option value="Chicago(IL)">Chicago</option>
              <option value="Las Vegas(NV )">Las Vegas</option>
            </select>
          </div>
          <div className={style.duration}>
            <h3>Duration:</h3>
            <select>
              <option>Miami</option>
              <option>Chicago</option>
              <option>Las Vegas</option>
            </select>
          </div>
          <div className={style.iconSearch}>
            <MdOutlineSearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
