import React from 'react'
import style from "./BannerHome.module.css"
function BannerHome() {
  let estado = 'Miami(FL)'
  return (
    <div className={style.bannerHome}>
        <div className={style.banner}> 
            <span className={style.city}>{estado}</span>
        </div>
    </div>
  )
}

export default BannerHome