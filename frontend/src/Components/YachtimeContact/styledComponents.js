import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const MapContainer = styled(Box)`
   width: 100vw;
   height: 50vh;
   display: flex;
   flex-direction: column;
   margin-left: -2em;
   justify-content: space-evenly;
`;

export const ButtonGet = styled(Box)`
   background-color: #131211ce;
   width: 8vw;
   height: 6vh;
   display: flex;
   justify-content: center;
   transition: 0.5s;
   align-items: center;
   cursor: pointer;

   &:hover {
      background-color: #caa838;
      width: 9vw;
      height: 6.5vh;
   }
`;

export const DataBox = styled(Box)`
   display: flex;
   justify-content: space-around;

   @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
   }
`;

export const NumberGraphy = styled(Typography)`
   color: white;
   font-weight: 400;
   font-size: 1rem;
`;

export const AllCardsBox = styled(Box)`
   display: none;

   @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
   }
`;

export const CardBox = styled(Box)`
   display: flex;
   flex-direction: column;
   width: 50%;
   align-items: center;
   justify-content: center;
   background-color: #222;
   margin-top: 0.5rem;
   margin-top: 0.5rem;
`;
