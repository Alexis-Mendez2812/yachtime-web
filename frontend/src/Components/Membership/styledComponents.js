import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const ButtonGet = styled(Box)`
   background-color: #181717;
   width: 10.5vw;
   height: 6vh;
   display: flex;
   justify-content: center;
   transition: 0.5s;
   align-items: center;
   cursor: pointer;
   color: #caa838;
   letter-spacing: 0.1rem;

   &:hover {
      background-color: #caa838;
      width: 11.5vw;
      height: 7vh;
      color: white;
   }
   @media (max-width: 768px) {
      width: 8rem;
      height: 3.5rem;
   }
`;

export const ButtonBox = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 8vh;
`;

export const Title = styled(Typography)`
   color: white;
   font-weight: 500;
   font-size: 2.8rem;
`;
