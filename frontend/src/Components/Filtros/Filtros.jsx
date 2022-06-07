import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   Container,
   FilterBox,
   FilterTitle,
   Select,
   Option,
   ResetButton,
} from './styledComponents';
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
      setYearSelect(e.target.value);
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
            <Select value={sizeSelect} onChange={handleInputSize}>
               <Option value='all'>Select</Option>
               {sizeArr.length > 0 &&
                  sizeArr
                     .sort((x, y) => {
                        if (x > y) {
                           return 1;
                        }
                        if (x < y) {
                           return -1;
                        }
                        return 0;
                     })
                     .map((n, i) => {
                        return (
                           <Option value={n} key={i}>
                              {n}
                           </Option>
                        );
                     })}
            </Select>
         </FilterBox>
         <FilterBox>
            <FilterTitle>Make:</FilterTitle>
            <Select onChange={handleInputModel} value={modelSelect}>
               <Option key='none' value='all'>
                  Select
               </Option>
               {modelArr.length > 0 &&
                  modelArr.map((model, i) => {
                     return (
                        <Option key={i} value={model}>
                           {model}
                        </Option>
                     );
                  })}
            </Select>
         </FilterBox>
         <FilterBox>
            <FilterTitle>Year:</FilterTitle>
            <Select onChange={handleInputYear} value={yearSelect}>
               <Option key='none' value='all'>
                  Select
               </Option>
               {yearArr.length > 0 &&
                  yearArr
                     .sort((x, y) => {
                        if (x > y) {
                           return 1;
                        }
                        if (x < y) {
                           return -1;
                        }
                        return 0;
                     })
                     .map((year, i) => {
                        return (
                           <Option key={i} value={year}>
                              {year}
                           </Option>
                        );
                     })}
            </Select>
         </FilterBox>
         <ResetButton onClick={handleReset}>RESET</ResetButton>
      </Container>
   );
};

export default Filtros;
