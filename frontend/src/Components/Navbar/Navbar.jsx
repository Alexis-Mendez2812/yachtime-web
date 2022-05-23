import React, { useEffect, useState } from 'react'
import logo from "./logo/logoYT.png"
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => { 
        const handleScroll = () => { 
            if(window.scrollY > 0){ 
                setIsScrolled(true)
            } else { 
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => { 
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
  
  return (
    <>
        <nav className={isScrolled ? style.navScroll : style.nav}>
            <div className={style.imgYT}>
                <img src={logo} alt='yachtimeLogo' className={style.img}/>
            </div>
            <div className={style.ulDiv}> 
                    <ul className={style.ulEnlaces}>
                        <li><Link to={"/"} className={style.enlace}>home</Link></li>
                        <li><Link to={"/membership"} className={style.enlace}>membership</Link></li>
                        <li><Link to={"/contactUs"} className={style.enlace}>contact us</Link></li>
                        <li><a href='https://www.facebook.com/Yatchtimeapp-104930065485155/' className={style.enlace}>facebook</a></li>
                        <li><a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y=' className={style.enlace}>instagram</a></li>
                        <li><Link to={"/"} className={style.enlace}>login</Link></li>
                    </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar