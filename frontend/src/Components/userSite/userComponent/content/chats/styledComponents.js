import { Paper, Box, Grid, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const Container = styled(Box)`
   width: 81.7vw;
   height: 100vh;
   display: flex;
`;

export const HistoryBox = styled(Box)`
   width: 30vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (max-width: 768px) {
      display: none;
   }
`;

export const ChatContainer = styled(Box)`
   width: 51.7vw;
   height: 100vh;

   @media (max-width: 768px) {
      display: none;
   }
`;

export const ChatBox = styled(Box)`
   width: 51.7vw;
   background-color: black;
   height: 93vh;
   padding: 1rem;
`;

export const MessageBox = styled(Box)`
   width: 51.7vw;
   height: 7vh;
   background-color: black;
   display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const Input = styled('input')`
   width: 85%;
   border-radius: 0.5rem;
   height: 80%;
   border: 0vh;
   outline: none;
   padding-left: 1rem;
`;

export const SendButton = styled('button')`
   width: 11%;
   border-radius: 0.5rem;
   height: 50%;
   cursor: pointer;
   border: 0vh;
`;

export const Title = styled(Typography)`
   font-size: 2rem;
   color: white;
   font-family: monospace;
   font-weight: 300;
`;

export const EachChatBox = styled(Box)`
   width: 30vw;
   height: 12vh;
   background-color: #141313;
   border-bottom: 0.1rem solid black;
   border-top: 0.1rem solid black;
   padding: 0.5rem;
   cursor: pointer;
   display: flex;
   align-items: center;
`;

export const UserNameGraphy = styled(Typography)`
   font-size: 1.3rem;
   color: white;
   font-weight: 300;
   text-transform: uppercase;
`;

export const LastMessGraphy = styled(Typography)`
   font-size: 1rem;
   color: #45a7d5;
   font-weight: 300;
`;

export const MetaDataChatBox = styled(Box)`
   width: 90%;
   height: 100%;
   margin-left: 0.4rem;
   overflow: hidden;
`;

export const LocadingBox = styled(Box)`
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const MessageOwnerBox = styled(Box)`
   background-color: grey;
   margin: 0.2rem;
   word-wrap: break-word;
   padding: 0.2rem;
   border-radius: 0.2rem;
   margin-left: -0.4rem;
`;

export const MessageGraphy = styled(Typography)`
   color: white;
   font-weight: 400;
`;

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

export const RespChatBox = styled(Box)`
   width: 100%;
   background-color: #141313;
   border-bottom: 0.1rem solid black;
   border-top: 0.1rem solid black;
   padding: 0.5rem;
   display: flex;
   align-items: center;
`;
