/*-----------IMPORT UTILITIES-----------*/
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const ButtonGet = styled(Box)`
   background-color: #131211ce;
   width: 7.5rem;
   height: 3rem;
   display: flex;
   justify-content: center;
   transition: 0.5s;
   align-items: center;
   cursor: pointer;
   text-align: center;
   color: white;

   &:hover {
      background-color: #caa838;
      width: 8.5rem;
      height: 3.5rem;
   }
`;

export const PicBox = styled(Box)`
   padding: 1em;
   gap: 1em;
   width: 50%;
   display: flex;
   flex-direction: column;
   font-family: 'Nunito';
   justify-content: flex-end;
   color: #fff;
   align-items: center;
`;

export const Get = styled(Typography)`
   color: white;
   font-size: 1.5rem;
`;

export const M = styled(Typography)`
   color: white;
   font-size: 1.9rem;
`;

export const T = styled(Typography)`
   color: white;
   font-size: 1rem;

   @media (max-width: 768px) {
      text-align: justify;
      text-justify: inter-word;
      font-size: 1rem;
      width: 190%;
   }
`;

export const AppBox = styled(Box)`
   display: flex;
   justify-content: space-around;
   width: 100%;
`;

export const Foot = styled('footer')`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const FooterBox = styled(Box)`
   display: flex;
   width: 50%;
   flex-direction: column;
   align-items: center;
`;

export const AppPics = styled(Box)`
   display: flex;
   width: 100%;
   justify-content: space-around;
   align-items: center;
   height: 10vh;
`;

export const LinksBox = styled(Box)`
   display: flex;
   width: 100%;
   justify-content: space-around;

   @media (max-width: 768px) {
      width: 132%;
      flex-wrap: wrap;
   }
`;
