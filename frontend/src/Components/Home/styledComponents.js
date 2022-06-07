import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const WppAvatar = styled(Avatar)`
   background-color: #04bf04d8;
   width: 5rem;
   height: 5rem;
   position: fixed;
   margin-left: 90vw;
   margin-top: 85vh;
   z-index: 100;
   cursor: pointer;
   transition: 0.5s;

   &:hover {
      margin-left: 89vw;
      margin-top: 83vh;
      width: 6rem;
      height: 6rem;
   }

   @media (max-width: 768px) {
      width: 4.5rem;
      height: 4.5rem;
      margin-left: 75vw;
      margin-top: 87vh;
   }
`;
