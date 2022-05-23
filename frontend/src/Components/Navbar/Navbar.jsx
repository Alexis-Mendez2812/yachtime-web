import React, { useEffect, useState } from 'react'
import logo from "./logo/logoYT.png"
import style from "./Navbar.module.css"

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
                        <li><a href='#' className={style.enlace}>home</a></li>
                        <li><a href='#' className={style.enlace}>memership</a></li>
                        <li><a href='#' className={style.enlace}>contact us</a></li>
                        <li><a href='#' className={style.enlace}>facebook</a></li>
                        <li><a href='#' className={style.enlace}>instagram</a></li>
                        <li><a href='login' className={style.enlace}>login</a></li>
                    </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar