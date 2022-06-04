import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardHomeYate from '../CardHomeYate/CardHomeYate';
// import SearchBar from "./SearchBar"
import { allYates } from '../../Redux/Actions/actions';
import { Link } from 'react-router-dom';

export default function HomeYates() {
   const [aux, setAux] = useState('');

   //Mi data de los estados
   const state = useSelector((state) => state);
   const allYats = useSelector((state) => state.allYates);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(allYates());
   }, []);

   return (
      <div className='Home-conteiner'>
         <div className='Home-nav'>
            <div className='Home-search' key='searchbar'></div>
         </div>
         <div>{allYats && <CardHomeYate />}</div>
         {state.copyYates?.length === 0 && (
            <h1 className='mensaje-error'>
               No hay yates disponibles disponibles
            </h1>
         )}
         <p>{aux}</p>
      </div>
   );
}
