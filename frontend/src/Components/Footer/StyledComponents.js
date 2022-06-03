/*-----------IMPORT UTILITIES-----------*/
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

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
