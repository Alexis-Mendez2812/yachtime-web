import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
/*--------------------------------------------------------*/
export const BackIcon = styled(KeyboardBackspaceIcon)`
   color: white;
   font-weight: bold;
   font-size: 3vw;
   transition: 0.3s;
   cursor: pointer;

   &: hover {
      font-size: 4vw;
      color: #2e8cbf;
   }
`;

export const IconBox = styled(Box)`
   width: 5rem;
   height: 15rem;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Picture = styled(Box)`
   width: 100vw;
   height: 90vh;
   background-size: cover;
   background-position-y: 50%;
   transition: 2s;
   overflow: hidden;
`;

export const PictureShadow = styled(Box)`
   width: 100%;
   height: 90vh;
   background-color: rgba(0, 0, 0, 0.2);
`;

export const DataPictureBox = styled(Box)`
   width: 100%;
   height: 24.3rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   padding-right: 3rem;
   padding-bottom: 5rem;
`;

export const DataGraphy = styled(Typography)`
   margin-left: 0.7rem;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 4rem;
   color: white;
   cursor: default;
   font-weight: 400;
`;

export const MessageButton = styled(Button)`
   background-color: transparent;
   border: 0.13rem solid white;
   color: white;
   width: 12rem;
   transition: 0.5s;

   &:hover {
      background-color: #000000bd;
      border-color: #2e8cbf;
      color: #2e8cbf;
      width: 17rem;
   }
`;

export const DataTitle = styled(Typography)`
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: -0.1rem;
   font-size: 4rem;
   color: white;
   cursor: default;
   font-weight: 500;
   font-family: monospace;
`;

export const FeatureBox = styled(Box)`
   width: 100vw;
   height: 50vh;
   padding: 2rem;
`;

export const DetailBox = styled(Box)`
   width: 50vw;
   height: 30vh;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`;

export const Li = styled('li')`
   color: white;
   font-size: 1.2rem;
   margin-bottom: 0.8rem;
`;

export const TextBox = styled(Box)`
   width: 44.5vw;
   height: 30vh;
   font-size: 1.2rem;
   text-align: justify;
   line-height: 1.5rem;
   color: white;
`;

export const CarPic = styled(Box)`
   width: 100vw;
   height: 70vh;
   background-size: cover;
   background-position-y: 50%;
`;
