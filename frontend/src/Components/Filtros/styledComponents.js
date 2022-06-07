import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const Container = styled(Box)`
   width: 100%;
   height: 4rem;
   display: flex;
`;

export const FilterBox = styled(Box)`
   background-color: rgba(238, 236, 236, 0.932);
   width: 30%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;

   @media (max-width: 768px) {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
   }
`;

export const FilterTitle = styled(Box)`
   color: grey;
   font-weight: 400;
   margin-left: 3rem;
   font-size: 1.5rem;

   @media (max-width: 768px) {
      margin-left: 0rem;
      font-size: 1rem;
   }
`;

export const Select = styled('select')`
   outline: none;
   border: 0vh;
   width: 100%;
   background-color: rgba(238, 236, 236, 0.932);
   height: 3rem;
   padding-left: 3rem;
   cursor: pointer;
   color: black;
   font-size: 1.5rem;

   @media (max-width: 768px) {
      margin-left: 0rem;
      font-size: 1rem;
      padding-left: 0.5rem;
   }
`;

export const ResetButton = styled(Box)`
   width: 25%;
   background-color: #1976d2;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   font-size: 1.5rem;
   font-weight: 500;
   color: black;

   @media (max-width: 768px) {
      font-size: 1.3rem;
   }
`;

export const Option = styled('option')`
   font-size: 1.5rem;
   font-weight: 400;
   color: black;
   text-transform: uppercase;

   @media (max-width: 768px) {
      font-size: 0.9rem;
   }
`;
