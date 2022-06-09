import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const Input = styled('input')`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const Label = styled('label')`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const InputBox = styled(Box)`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const InputBox2 = styled(Box)`
   @media (max-width: 768px) {
      display: block;
   }
`;
