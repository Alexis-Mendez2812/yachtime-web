import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, FilterBox, FilterTitle } from './styledComponents';
import { Box } from '@mui/material';
import { getAllProducts } from '../../Redux/Actions/ProductActions/getAllProducts';
import {
   filterBySize,
   filterByModel,
   filterByYear,
} from '../../Redux/Actions/FilterActions/filterActions';

const Filtros = ({ setCurrentPage, setCharging }) => {
   const dispatch = useDispatch();
   const allYates = useSelector((state) => {
      return state.copyYates;
   });

   const [sizeSelect, setSizeSelect] = useState('All');
   const [modelSelect, setModelSelect] = useState('All');
   const [yearSelect, setYearSelect] = useState('All');

   let sizeArr = [];
   let modelArr = [];
   let yearArr = [];
   for (let i = 0; i < allYates.length; i++) {
      if (!sizeArr.includes(allYates[i].model)) {
         sizeArr.push(allYates[i].model);
      }
   }
   for (let i = 0; i < allYates.length; i++) {
      if (!modelArr.includes(allYates[i].make)) {
         modelArr.push(allYates[i].make);
      }
   }
   for (let i = 0; i < allYates.length; i++) {
      if (!yearArr.includes(allYates[i].year)) {
         yearArr.push(allYates[i].year);
      }
   }

   const handleInputSize = (e) => {
      e.preventDefault();
      setSizeSelect(e.target.value);
      setModelSelect('Select');
      setYearSelect('Select');
      setCharging(true);
      dispatch(filterBySize(e.target.value));
      setCurrentPage(1);
      setTimeout(() => {
         setCharging(false);
      }, 400);
   };

   const handleInputModel = (e) => {
      e.preventDefault();
      setCharging(true);
      setModelSelect(e.target.value);
      setSizeSelect('Select');
      setYearSelect('Select');
      dispatch(filterByModel(e.target.value));
      setCurrentPage(1);
      setTimeout(() => {
         setCharging(false);
      }, 400);
   };

   const handleInputYear = (e) => {
      e.preventDefault();
      setCharging(true);
      setModelSelect(e.target.value);
      setSizeSelect('Select');
      setModelSelect('Select');
      dispatch(filterByYear(e.target.value));
      setCurrentPage(1);
      setTimeout(() => {
         setCharging(false);
      }, 400);
   };

   const handleReset = (e) => {
      setCharging(true);
      e.preventDefault();
      dispatch(getAllProducts());
      setSizeSelect('Select');
      setModelSelect('Select');
      setYearSelect('Select');
      setTimeout(() => {
         setCharging(false);
      }, 400);
   };

   return (
      <Container>
         <FilterBox>
            <FilterTitle>Model:</FilterTitle>
            <select
               style={{
                  outline: 'none',
                  border: '0vh',
                  width: '70%',
                  backgroundColor: 'rgba(238, 236, 236, 0.932)',
                  height: '3rem',
                  paddingLeft: '3rem',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: '1.5rem',
               }}
               value={sizeSelect}
               onChange={handleInputSize}
            >
               <option value='all'>Select</option>
               {sizeArr.length > 0 &&
                  sizeArr
                     .sort((x, y) => {
                        if (x > y) {
                           return 1;
                        }
                        if (x < y) {
                           return -1;
                        }
                     })
                     .map((n, i) => {
                        return (
                           <option
                              style={{ fontSize: '1.5rem' }}
                              value={n}
                              key={i}
                           >
                              {n}
                           </option>
                        );
                     })}
            </select>
         </FilterBox>
         <FilterBox>
            <FilterTitle>Make:</FilterTitle>
            <select
               style={{
                  outline: 'none',
                  border: '0vh',
                  backgroundColor: 'rgba(238, 236, 236, 0.932)',
                  width: '70%',
                  height: '3rem',
                  paddingLeft: '3rem',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: '1.5rem',
               }}
               onChange={handleInputModel}
               value={modelSelect}
            >
               <option style={{ fontSize: '1.5rem' }} key='none' value='all'>
                  Select
               </option>
               {modelArr.length > 0 &&
                  modelArr.map((model, i) => {
                     return (
                        <option
                           style={{ fontSize: '1.5rem' }}
                           key={i}
                           value={model}
                        >
                           {model}
                        </option>
                     );
                  })}
            </select>
         </FilterBox>
         <FilterBox>
            <FilterTitle>Year:</FilterTitle>
            <select
               style={{
                  outline: 'none',
                  backgroundColor: 'rgba(238, 236, 236, 0.932)',
                  border: '0vh',
                  width: '70%',
                  height: '3rem',
                  paddingLeft: '3rem',
                  cursor: 'pointer',
                  color: 'black',
                  fontSize: '1.5rem',
               }}
               onChange={handleInputYear}
               value={yearSelect}
            >
               <option style={{ fontSize: '1.5rem' }} key='none' value='all'>
                  Select
               </option>
               {yearArr.length > 0 &&
                  yearArr
                     .sort((x, y) => {
                        if (x > y) {
                           return 1;
                        }
                        if (x < y) {
                           return -1;
                        }
                     })
                     .map((year, i) => {
                        return (
                           <option
                              style={{ fontSize: '1.5rem' }}
                              key={i}
                              value={year}
                           >
                              {year}
                           </option>
                        );
                     })}
            </select>
         </FilterBox>
         <Box
            onClick={handleReset}
            style={{
               width: '10%',
               backgroundColor: '#1976d2',
               height: '100%',
               display: 'flex',
               justifyContent: 'center',
               cursor: 'pointer',
               alignItems: 'center',
               fontSize: '1.5rem',
            }}
         >
            RESET
         </Box>
      </Container>
   );
};

export default Filtros;
