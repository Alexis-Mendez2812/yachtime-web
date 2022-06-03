import { styled } from '@mui/material/styles';

export const Button = styled('button')(
   ({ theme }) => `
   border: none;
   width: 1.8rem;
   height: 1.3rem;
   font-family: Helvetica;
   border-radius: 0.1rem;
   transition: 0.5s;
   font-weight: bold;
   margin: 0.1rem;
   diplay: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      background-color: ${theme.palette.info.light};
      width: 2rem;
      height: 1.5rem;
   }
`
);
