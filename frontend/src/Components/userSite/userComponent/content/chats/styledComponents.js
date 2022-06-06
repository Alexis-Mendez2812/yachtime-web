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
`;

export const ChatContainer = styled(Box)`
   width: 51.7vw;
   height: 100vh;
`;

export const ChatBox = styled(Box)`
   width: 51.7vw;
   background-color: black;
   height: 93vh;
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
   color: white;
   font-weight: 300;
`;
