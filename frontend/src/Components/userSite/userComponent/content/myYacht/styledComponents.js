import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const NewNavbar = styled(Box)`
   width: 100%;
   display: flex;
   align-items: center;
   height: 4rem;
   justify-content: space-around;
`;

export const Aux = styled(Box)`
   display: none;
   @media (max-width: 768px) {
      display: block;
   }
`;
