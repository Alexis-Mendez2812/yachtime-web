//CardHomeYate
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/Actions/ProductActions/getAllProducts';
import { useNavigate } from 'react-router-dom';
import Filtros from '../Filtros/Filtros';
import './CardHome.css';
import Paginado from '../Paginado/Paginado';
import { Box, CircularProgress } from '@mui/material';
import {
   AllCardsContainer,
   Card,
   DataGraphy,
   ChargingContainer,
   TextBox,
} from './StyledComponents';

export default function CardHomeYate() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const allYates = useSelector((state) => {
      return state.allYates;
   });

   const [charging, setCharging] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [yatesPerPage] = useState(9);
   const indexOfLastYate = currentPage * yatesPerPage;
   const indexFirstYate = indexOfLastYate - yatesPerPage;
   const renderYates = allYates.slice(indexFirstYate, indexOfLastYate);

   const paginado = (pageNumber) => {
      setCharging(true);
      setTimeout(() => {
         setCharging(false);
         window.scrollTo(0, 500);
         setCurrentPage(pageNumber);
      }, 400);
   };

   const handleRedirection = (id) => {
      navigate(`/CardDetail/${id}`);
   };

   useEffect(() => {
      setCurrentPage(1);
      dispatch(getAllProducts());
   }, [dispatch]);

   return (
      <Box>
         <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Filtros
               setCurrentPage={setCurrentPage}
               setCharging={setCharging}
            />
         </Box>
         {charging ? (
            <ChargingContainer>
               <CircularProgress color='info' size={100} />;
            </ChargingContainer>
         ) : (
            <AllCardsContainer>
               {renderYates.map((e) => (
                  <Card
                     onClick={() => handleRedirection(e.id)}
                     key={e.id}
                     style={{
                        backgroundImage: `url(${
                           e.pictures[0] ||
                           'https://res.cloudinary.com/yachtimeapp/image/upload/v1654214651/api-img/mj9ckyiislx5gouumomy.jpg'
                        })`,
                     }}
                  >
                     <TextBox>
                        <DataGraphy>
                           {e.model}' {e.make}
                        </DataGraphy>
                     </TextBox>
                  </Card>
               ))}
            </AllCardsContainer>
         )}
         {allYates.length > 9 && (
            <Paginado
               yatesPerPage={yatesPerPage}
               allYates={allYates.length}
               paginado={paginado}
            />
         )}
      </Box>
   );
}
