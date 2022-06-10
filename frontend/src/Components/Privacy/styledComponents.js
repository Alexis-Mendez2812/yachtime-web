/*-----------IMPORT UTILITIES-----------*/
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const TextContainer = styled(Box)`
   margin-top: 5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Title = styled(Typography)`
   color: white;
   font-size: 2rem;
   font-weight: bold;
`;

export const Subtitle = styled(Typography)`
   color: white;
   font-size: 2rem;
   margin-bottom: -1.9rem;
`;

export const ParaBox = styled(Box)`
   width: 100vw;
   display: flex;
   padding: 1rem;
   padding-left: 3rem;
   padding-right: 3rem;
`;

export const Text = styled(Typography)`
   color: white;
   font-size: 1rem;
   text-align: justify;
   text-justify: inter-word;
`;

export const Ul = styled('ul')`
   color: white;
`;

export const Li = styled('li')`
   color: white;
`;
