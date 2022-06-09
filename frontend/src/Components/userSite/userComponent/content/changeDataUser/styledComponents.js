import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const Container = styled(Box)`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const Container2 = styled(Box)`
   display: none;

   @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const NewNavbar = styled(Box)`
   width: 100%;
   display: flex;
   align-items: center;
   height: 4rem;
   justify-content: space-around;
`;

export const FormBox = styled(Box)`
   width: 90%;
   height: 27rem;
   background-color: yellow;
   border-radius: 1.5rem;
   margin-top: 5rem;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   box-shadow: 0 5px 10px -5px rgb(0 0 0/30%);
   background-color: rgb(255, 255, 255, 50%);
   gap: 10px;
`;

export const Button = styled('button')`
   width: 100%;
   display: flex;
   align-items: center;
   height: 4rem;
   justify-content: space-around;
`;
