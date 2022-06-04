import React from 'react';
import style from './BannerHome.module.css';
import one from '../../img/one.jpg';
import two from '../../img/two.jpg';
import three from '../../img/three.jpg';
import four from '../../img/four.jpg';

function BannerHome() {
   return (
      <div className={style.container}>
         <ul className={style.listado}>
            <li className={style.eachSlide}>
               <img className={style.eachImg} src={one} alt='' />
            </li>
            <li className={style.eachSlide}>
               <img className={style.eachImg} src={two} alt='' />
            </li>
            <li className={style.eachSlide}>
               <img className={style.eachImg} src={three} alt='' />
            </li>
            <li className={style.eachSlide}>
               <img className={style.eachImg} src={four} alt='' />
            </li>
         </ul>
      </div>
   );
}

export default BannerHome;
