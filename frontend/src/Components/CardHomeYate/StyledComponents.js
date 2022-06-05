/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { Paper, Box, Grid, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const AllCardsContainer = styled(Box)`
   width: 99vw;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-wrap: wrap;
`;

export const ChargingContainer = styled(Box)`
   width: 99vw;
   height: 105vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Card = styled(Box)`
   width: 33vw;
   height: 35vh;
   background-size: cover;
   background-position-y: 30%;
   transition: 2s;
   cursor: pointer;

   &:hover {
      background-position-y: 70%;
   }
`;

export const CardDetail = styled(Box)`
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: flex-end;
   width: 100vw;
   height: 87vh;
   background-size: cover;
   background-position-y: 30%;
   transition: 2s;
   cursor: pointer;

   &:hover {
      background-position-y: 100%;
   }
`;

export const DataGraphy = styled(Typography)`
   margin-left: 0.7rem;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 1.2rem;
   color: white;
`;

export const TextBox = styled(Box)`
   margin-top: 48%;
   background: linear-gradient(to right, black, transparent, transparent);
`;
export const TextBoxDet = styled(Box)`
   background: linear-gradient(to right, grey, transparent, transparent);
`;
