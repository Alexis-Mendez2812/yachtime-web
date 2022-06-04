import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './BannerHome.module.css';
import SearchIcon from '@mui/icons-material/Search';
import one from '../../img/one.jpg';
import two from '../../img/two.jpg';
import three from '../../img/three.jpg';
import four from '../../img/four.jpg';
import { SearchButton } from './StyledComponents';
import { filterBySize } from '../../Redux/Actions/FilterActions/filterBySize';

function BannerHome() {
   const dispatch = useDispatch();
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
      e.preventDefault();
      setSize(e.target.value);
      dispatch(filterBySize(e.target.value));
   };

   const handleInputModel = (e) => {
      e.preventDefault();
      setModel(e.target.value);
   };

   return (
      <div className={style.container}>
         {/* <div className={style.prueba}>
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
                     value={model}
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
                     <option key='all' value='all'>
                        None
                     </option>
                     <option key={40} value={40}>
                        40
                     </option>
                     <option key={42} value={42}>
                        42
                     </option>
                     <option key={45} value={45}>
                        45
                     </option>
                     <option key={55} value={55}>
                        55
                     </option>
                     <option key={60} value={60}>
                        60
                     </option>
                     <option key={65} value={65}>
                        65
                     </option>
                     <option key={70} value={70}>
                        70
                     </option>
                     <option key={80} value={80}>
                        80
                     </option>
                     <option key={100} value={100}>
                        100
                     </option>
                     <option key={115} value={115}>
                        115
                     </option>
                     <option key={120} value={120}>
                        120
                     </option>
                  </select>
               </div>
            </div>
         </div> */}

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
