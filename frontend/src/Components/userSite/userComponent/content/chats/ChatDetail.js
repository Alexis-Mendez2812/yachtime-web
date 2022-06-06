import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bringAllChats } from '../../../../../Redux/Actions/ChatActions/chatActions';
import { getAllUsers } from '../../../../../Redux/Actions/actions';
import MessageIcon from '@mui/icons-material/Message';
import Loading from '../../../../Loading/Loading';
import { Box } from '@mui/material';
import { 
   Container,
   HistoryBox,
   Input,
   Title,
   UserNameGraphy,
   MessageGraphy,
   MetaDataChatBox,
   MessageOwnerBox,
   LocadingBox,
   MessageBox,
   LastMessGraphy,
   EachChatBox,
   SendButton,
   ChatContainer,
   ChatBox,
} from './styledComponents';
import io from 'socket.io-client';
const socket = io.connect('https://yachtimeapp.herokuapp.com/');

export const ChatDetail = () => {
   const dispatch = useDispatch();
   let { userSession, users } = useSelector((state) => {
      return state;
   });
   const [adminId, setAdminId] = useState('');
   const [allMyChats, setAllMyChats] = useState([]);
   const [charging, setCharging] = useState(true);
   const [actualMessage, setActualMessage] = useState('');
   const [myMessages, setMyMessages] = useState([]);
   const [room, setRoom] = useState('');

   useEffect(() => {
      dispatch(getAllUsers());
   }, []);
   useEffect(() => {
      setAdminId(userSession.id);
   }, [userSession.id]);
   useEffect(() => {
      if (adminId && users.length) {
         let prueba = {};
         let eachChat = [];
         bringAllChats(adminId)
            .then((ans) => {
               for (let i = 0; i < ans.length; i++) {
                  if (!Object.keys(prueba).includes(ans[i].UserId)) {
                     prueba[ans[i].UserId] = [ans[i].message];
                  } else {
                     prueba[ans[i].UserId] = [
                        ...prueba[ans[i].UserId],
                        ans[i].message,
                     ];
                  }
               }
               for (let prop in prueba) {
                  const actualUser = users.find((u) => {
                     return u.id === prop;
                  });
                  eachChat.push({
                     name: actualUser.userName,
                     mess: prueba[prop],
                  });
               }

               setAllMyChats(eachChat);
            })
            .catch((err) => console.log(err));
      }
   }, [adminId, users]);
   useEffect(() => {
      socket.on('receive_message', (data) => {
         setMyMessages([...myMessages, data]);
      });
   });
   useEffect(() => {
      if (room.length > 0) {
         socket.emit('join_chat', room);
      }
   }, [room]);

   const handleOpenChat = (m) => {
      setRoom(`${userSession.userName}${m.name}`);
      setMyMessages(m.mess);
      if (charging) {
         setCharging(false);
      }
   };
   const handleInputMessage = (e) => {
      setActualMessage(e.target.value);
   };
   const handleSendMessage = () => {
      setMyMessages([...myMessages, actualMessage]);
      socket.emit('send_message', { actualMessage, room });
      setActualMessage('');
   };

   return (
      <Container>
         <HistoryBox>
            <Title>_____ Your Chats _____</Title>
            {allMyChats.length > 0 &&
               allMyChats.map((m) => {
                  return (
                     <EachChatBox
                        key={m.name}
                        onClick={() => handleOpenChat(m)}
                     >
                        <MessageIcon color='primary' fontSize='large' />
                        <MetaDataChatBox>
                           <UserNameGraphy>{m.name}</UserNameGraphy>
                           <LastMessGraphy>{m.mess[0]}</LastMessGraphy>
                        </MetaDataChatBox>
                     </EachChatBox>
                  );
               })}
         </HistoryBox>
         <ChatContainer>
            {charging ? (
               <LocadingBox>
                  <Loading />
               </LocadingBox>
            ) : (
               <Box>
                  <ChatBox>
                     {myMessages.length > 0 &&
                        myMessages.map((m, i) => {
                           return (
                              <MessageOwnerBox key={i}>
                                 <MessageGraphy>{m}</MessageGraphy>
                              </MessageOwnerBox>
                           );
                        })}
                  </ChatBox>
                  <MessageBox>
                     <Input
                        value={actualMessage}
                        onChange={handleInputMessage}
                     ></Input>
                     <SendButton onClick={handleSendMessage}>Send</SendButton>
                  </MessageBox>
               </Box>
            )}
         </ChatContainer>
      </Container>
   );
};
