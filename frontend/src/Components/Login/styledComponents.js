import { Box, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const Container = styled(Box)`
   color: white;
   height: 100vh;
   display: flex;

   @media (max-width: 768px) {
      flex-direction: column;
      height: 100vh;
   }
`;

export const Form = styled(Box)`
   width: 23.8rem;
   height: 65%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;

export const GoogleText = styled(Typography)`
   color: white;
   font-size: 1rem;
   font-weight: bold;
`;

export const GoogleBox = styled(Box)`
   background-color: #1d304f;
   cursor: pointer;
   width: 70%;
   height: 3.5rem;
   display: flex;
   justify-content: space-around;
   align-items: center;

   @media (max-width: 768px) {
      height: 4.5rem;
   }
`;

export const GoogleImg = styled('img')`
   width: 2.5rem;
   height: 2.5rem;
`;

export const LogButton = styled('button')`
background-color: #1d304f;
color: white;
font-weight: 700;
font-size: 1rem;
padding: .8em 0;
border: none;
border-radius: .5em;
transition all .3s ease;
cursor: pointer;
width:60%
`;

export const FormBox = styled(Box)`
   width: 80%;
   height: 70%;
   padding: 2em;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   border-radius: 1.5rem;
   box-shadow: 0 5px 10px -5px rgb(0 0 0/30%);
   background-color: rgb(255, 255, 255, 30%);
   gap: 10px;
`;

export const FormBox2 = styled(Box)`
   display: flex;
   height: 23rem;
   flex-direction: column;
   justify-content: space-around;
   border-radius: 1rem;
   align-items: center;
   box-shadow: 0 5px 10px -5px rgb(0 0 0/30%);
   background-color: rgb(255, 255, 255, 40%);
   gap: 10px;

   @media (max-width: 768px) {
      display: none;
   }
`;

export const TFBox = styled(Box)`
   width: 35rem;
   display: flex;
   justify-content: space-around;
`;

export const TextInput = styled(TextField)`
   width: 40%;
   color: black;
`;

export const Container2 = styled(Box)`
   width: 35rem;
   height: 55%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   @media (max-width: 768px) {
      height: 80vh;
   }
`;

export const FormBox3 = styled(Box)`
   display: none;

   @media (max-width: 768px) {
      width: 90%;
      height: 145%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 1rem;
      box-shadow: 0 5px 10px -5px rgb(0 0 0/30%);
      background-color: rgb(255, 255, 255, 50%);
      gap: 10px;
   }
`;

export const TextInput2 = styled(TextField)`
   width: 85%;
   color: black;
`;
