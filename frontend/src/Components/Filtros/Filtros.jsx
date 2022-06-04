import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

const Filtros = () => {
   const allYates = useSelector((state) => {
      return state.allYates;
   });
   return (
      <Box
         style={{
            width: '98.1vw',
            height: '5rem',
            display: 'flex',
         }}
      >
         <div
            style={{
               backgroundColor: 'white',
               width: '30%',
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <p
               style={{
                  color: 'grey',
                  fontWeight: '400',
                  marginLeft: '3rem',
                  fontSize: '1.5rem',
               }}
            >
               Size:
            </p>
            <select
               style={{
                  outline: 'none',
                  border: '0vh',
                  width: '70%',
                  height: '3.9rem',
                  paddingLeft: '3rem',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: '2rem',
               }}
               //  onChange={handleInputModel}
               //  className={style.selector}
               //  value={model}
            >
               <option value='all'>Select</option>
               {allYates.length > 0 &&
                  allYates
                     .sort((x, y) => {
                        if (x.model > y.model) {
                           return 1;
                        }
                        if (x.model < y.model) {
                           return -1;
                        }
                     })
                     .map((yate, i) => {
                        return (
                           <option style={{ fontSize: '1.5rem' }} key={i}>
                              {yate.model}
                           </option>
                        );
                     })}
               {/* <option style={{ fontSize: '1.5rem' }} key={40} value={40}>
                  40
               </option>
               <option style={{ fontSize: '1.5rem' }} key={42} value={42}>
                  42
               </option>
               <option style={{ fontSize: '1.5rem' }} key={45} value={45}>
                  45
               </option>
               <option style={{ fontSize: '1.5rem' }} key={55} value={55}>
                  55
               </option>
               <option style={{ fontSize: '1.5rem' }} key={60} value={60}>
                  60
               </option>
               <option style={{ fontSize: '1.5rem' }} key={65} value={65}>
                  65
               </option>
               <option style={{ fontSize: '1.5rem' }} key={70} value={70}>
                  70
               </option>
               <option style={{ fontSize: '1.5rem' }} key={80} value={80}>
                  80
               </option>
               <option style={{ fontSize: '1.5rem' }} key={100} value={100}>
                  100
               </option>
               <option style={{ fontSize: '1.5rem' }} key={115} value={115}>
                  115
               </option>
               <option style={{ fontSize: '1.5rem' }} key={120} value={120}>
                  120
               </option> */}
            </select>
         </div>
      </Box>
   );
};

export default Filtros;
