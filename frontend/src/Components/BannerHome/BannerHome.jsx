import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './BannerHome.module.css';
import SearchIcon from '@mui/icons-material/Search';
import one from '../../img/one.jpg';
import two from '../../img/two.jpg';
import three from '../../img/three.jpg';
import four from '../../img/four.jpg';
import { SearchButton } from './StyledComponents';

function BannerHome() {
   const allYates = useSelector((state) => {
      return state.allYates;
   });

   let modelTypes = [];
   for (let i = 0; i < allYates.length; i++) {
      if (!modelTypes.includes(allYates[i].make)) {
         modelTypes.push(allYates[i].make);
      }
   }

   const [model, setModel] = useState('');
   const [size, setSize] = useState('');

   const handleInputSize = (e) => {
      setSize(e.target.value);
   };

   const handleInputModel = (e) => {
      setModel(e.target.value);
   };

   return (
      <div className={style.container}>
         <div className={style.prueba}>
            <h1 className={style.charter}>YACHTIME MIAMI</h1>
            <div className={style.selectBox}>
               <SearchButton variant='contained' color='info'>
                  <SearchIcon fontSize='large' />
               </SearchButton>

               <div className={style.selc}>
                  <p>Model:</p>
                  <select
                     onChange={handleInputModel}
                     className={style.selector}
                  >
                     <option value=''>None</option>
                     {allYates.length > 0 &&
                        modelTypes.map((yate, i) => {
                           return (
                              <option value={yate} key={i}>
                                 {yate}
                              </option>
                           );
                        })}
                  </select>
               </div>

               <div className={style.selc}>
                  <p>Size:</p>
                  <select
                     className={style.selector}
                     value={size}
                     onChange={handleInputSize}
                  >
                     <option value=''>None</option>
                     <option value={40}>40</option>
                     <option value={42}>42</option>
                     <option value={45}>45</option>
                     <option value={55}>55</option>
                     <option value={60}>60</option>
                     <option value={65}>65</option>
                     <option value={70}>70</option>
                     <option value={80}>80</option>
                     <option value={100}>100</option>
                     <option value={115}>115</option>
                     <option value={120}>120</option>
                  </select>
               </div>
            </div>
         </div>

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
