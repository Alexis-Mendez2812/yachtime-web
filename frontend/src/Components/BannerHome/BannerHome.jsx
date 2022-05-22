import React from 'react'
import style from "./BannerHome.module.css"
function BannerHome() {
  return (
    <div className={style.bannerHome}>
        <div className={style.banner}> 
            <span className={style.city}>Miami</span>
        </div>
    </div>
  )
}

export default BannerHome