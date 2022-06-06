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
   MessageBox,
   LastMessGraphy,
   EachChatBox,
   SendButton,
   ChatContainer,
   ChatBox,
} from './styledComponents';

export const ChatDetail = () => {
   const dispatch = useDispatch();
   let { userSession, users } = useSelector((state) => {
      return state;
   });
   const [adminId, setAdminId] = useState('');
   const [allMyChats, setAllMyChats] = useState([]);
   const [charging, setCharging] = useState(true);

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
               console.log('ACA: ', eachChat);
               setAllMyChats(eachChat);
            })
            .catch((err) => console.log(err));
      }
   }, [adminId, users]);

   const handleOpenChat = (e) => {
      setCharging(!charging);
   };

   return (
      <Container>
         <HistoryBox>
            <Title>_____ Your Chats _____</Title>
            {allMyChats.length > 0 &&
               allMyChats.map((m) => {
                  return (
                     <EachChatBox key={m.name} onClick={handleOpenChat}>
                        <MessageIcon color='primary' fontSize='large' />
                        <Box
                           style={{
                              marginLeft: '0.4rem',
                              width: '90%',
                              height: '100%',
                              overflow: 'hidden',
                           }}
                        >
                           <UserNameGraphy>{m.name}</UserNameGraphy>
                           <LastMessGraphy>{m.mess[0]}</LastMessGraphy>
                        </Box>
                     </EachChatBox>
                  );
               })}
         </HistoryBox>
         <ChatContainer>
            {charging ? (
               <Box
                  style={{
                     backgroundColor: 'black',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <Loading />
               </Box>
            ) : (
               <Box>
                  <ChatBox></ChatBox>
                  <MessageBox>
                     <Input></Input>
                     <SendButton>Send</SendButton>
                  </MessageBox>
               </Box>
            )}
         </ChatContainer>
      </Container>
   );
};
