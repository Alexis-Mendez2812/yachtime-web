import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { SiInstagram } from "react-icons/si";
import { ImFacebook } from "react-icons/im";

function Footer() {
  return (
    <div>
      <div className={style.imgMembership}>
        <div className={style.textMembership}>
          <h3>Get the</h3>
          <h2>MemberShip</h2>
          <p>
            Designed for individuals and companies that would like to entertain
            of yachs. throughout the year. Featuring discounted pricing,
            exclusive events and special partner offers.
          </p>
          <button>GET IT NOW</button>
        </div>
      </div>
      <footer>
          <hr style={{border: "1px solid gray"}}/>
          <div className={style.footer}> 
                <div className={style.divImages}>
                    <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" className={style.descarga}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" className={style.descarga}/>
                </div>
                <div className={style.enlaces}>
                    <Link to={"/"}>About us</Link>
                    <Link to={"/"}>Contact us</Link>
                    <Link to={"/"}>Terms of service</Link>
                    <Link to={"/"}>Privacy policy</Link><br/>
                    <span>&copy; 2022 Yachtimeapp</span>
                </div>
                <div className={style.redesSociales}>
                    <a href='https://www.facebook.com/Yatchtimeapp-104930065485155/'><ImFacebook className={style.instagram} /></a>
                    <a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y='><SiInstagram className={style.instagram} /></a>
                </div>
          </div>
      </footer>
    </div>
  );
}

export default Footer;
