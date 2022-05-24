import React from "react";
import style from "./YachtimeContact.module.css";
import angel from "./staff/angel.jpg";
import david from "./staff/david.jpg";
import diego from "./staff/diego.jpg";
import valeria from "./staff/valeria.jpg";
import { SiInstagram } from "react-icons/si";

function YachtimeContact() {
  return (
    <div className={style.YachtimeContact}>
      <h1 className={style.title}>Yachtimeapp's Crew</h1>

      {/* STAFF */}
      <div className={style.divImages}>
        <div className={style.staff}>
          <img src={angel} alt="angel" className={style.img} />
          <span>Angel L.</span>
          <h3>CEO\Founder</h3>
          <SiInstagram className={style.instagram} />
        </div>
        <div className={style.staff}>
          <img src={david} alt="david" className={style.img} />
          <span>David G.</span>
          <h3>COO\Founder</h3>
          <SiInstagram className={style.instagram} />
        </div>
        <div className={style.staff}>
          <img src={valeria} alt="valeria" className={style.img} />
          <span>Valeria F.</span>
          <h3>Concierge</h3>
          <SiInstagram className={style.instagram} />
        </div>
        <div className={style.staff}>
          <img src={diego} alt="diego" className={style.img} />
          <span>Diego C.</span>
          <h3>Concierge</h3>
          <SiInstagram className={style.instagram} />
        </div>
      </div>
      <div> 
          <h1 className={style.title} >Contact</h1>
      </div>
    </div>
  );
}

export default YachtimeContact;
