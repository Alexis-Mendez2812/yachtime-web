import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardHomeYate from '../CardHomeYate/CardHomeYate';
// import SearchBar from "./SearchBar"
import { allYates } from '../../Redux/Actions/actions';
import { Box } from '@mui/material';

export default function HomeYates() {
   const allYats = useSelector((state) => state.allYates);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(allYates());
   }, [dispatch]);

   return <Box>{allYats && <CardHomeYate />}</Box>;
}
