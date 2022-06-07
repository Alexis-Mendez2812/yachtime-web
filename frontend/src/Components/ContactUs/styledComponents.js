import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/
export const DataBox = styled(Box)`
   margin-top: 5rem;
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 10vh;

   @media (max-width: 768px) {
      flex-direction: column;
      height: 40vh;
   }
`;

export const DataGraphy = styled(Typography)`
   color: white;
   font-size: 2rem;
   margin-bottom: -0.01rem;

   @media (max-width: 768px) {
      font-size: 1.2rem;
   }
`;
