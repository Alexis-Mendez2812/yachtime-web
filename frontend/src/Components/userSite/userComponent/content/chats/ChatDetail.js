import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bringAllChats } from '../../../../../Redux/Actions/ChatActions/chatActions';
import { getAllUsers } from '../../../../../Redux/Actions/actions';
import MessageIcon from '@mui/icons-material/Message';
import Loading from '../../../../Loading/Loading';
import { Box } from '@mui/material';
import { NewNavbar } from './styledComponents';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Avatar, MenuItem, Menu } from '@mui/material';
import Logo from '../changeDataUser/logo/logoYT.png';
import { postUserGoogle } from '../../../../../Redux/Actions/actions';
import {
   Container,
   HistoryBox,
   Input,
   UserNameGraphy,
   MessageGraphy,
   MetaDataChatBox,
   RespChatBox,
   Aux,
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
// const socket = io.connect('https://yachtimeapp.herokuapp.com');
const socket = io.connect('http://localhost:3001');

export const ChatDetail = () => {
   const { logout, user } = useAuth0();
   const dispatch = useDispatch();
   let { userSession, users } = useSelector((state) => {
      return state;
   });
   const { picture } = useSelector((state) => state.userSession);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   useEffect(() => {
      dispatch(postUserGoogle(user));
   }, [dispatch, user]);
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

   useEffect(() => {
      dispatch({ type: 'AUX', payload: true });
      return () => {
         dispatch({ type: 'AUX', payload: false });
      };
   }, [dispatch]);

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
         <Aux>
            <NewNavbar>
               <Link to='/'>
                  <img
                     style={{ width: '20rem', height: '4rem' }}
                     src={Logo}
                     alt=''
                  />
               </Link>
               <Avatar
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  alt=''
                  src={picture}
                  sx={{ width: 56, height: 56 }}
               />
            </NewNavbar>
            <Menu
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
            >
               <Link to='/home'>
                  <MenuItem>Dashboard</MenuItem>
               </Link>
               <Link to='/userSite/data'>
                  <MenuItem>Profile</MenuItem>
               </Link>
               <Link to='/userSite/myYacht'>
                  <MenuItem>My Yacht</MenuItem>
               </Link>
               <Link to='/userSite/chats'>
                  <MenuItem>Chats</MenuItem>
               </Link>
               <Link to='/userSite/changepass'>
                  <MenuItem>Change Password</MenuItem>
               </Link>
               <MenuItem
                  onClick={() => logout({ returnTo: window.location.origin })}
               >
                  Log Out
               </MenuItem>
            </Menu>
            <Box
               style={{
                  width: '103.5%',
                  height: '17rem',
               }}
            >
               {allMyChats.length > 0 &&
                  allMyChats.map((m) => {
                     return (
                        <RespChatBox
                           key={m.name}
                           onClick={() => handleOpenChat(m)}
                        >
                           <MessageIcon color='primary' fontSize='large' />
                           <MetaDataChatBox>
                              <UserNameGraphy>{m.name}</UserNameGraphy>
                              <LastMessGraphy>{m.mess[0]}</LastMessGraphy>
                           </MetaDataChatBox>
                        </RespChatBox>
                     );
                  })}
            </Box>
            <Box>
               {charging ? (
                  <LocadingBox>
                     <Loading />
                  </LocadingBox>
               ) : (
                  <Box>
                     <ChatBox style={{ width: '103.5%', height: '27.7rem' }}>
                        {myMessages.length > 0 &&
                           myMessages.map((m, i) => {
                              return (
                                 <MessageOwnerBox key={i}>
                                    <MessageGraphy>{m}</MessageGraphy>
                                 </MessageOwnerBox>
                              );
                           })}
                     </ChatBox>
                     <Box
                        style={{
                           width: '103.5%',
                           height: '4rem',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-around',
                        }}
                     >
                        <Input
                           style={{ width: '75%' }}
                           value={actualMessage}
                           onChange={handleInputMessage}
                        ></Input>
                        <SendButton
                           style={{ width: '20%', height: '65%' }}
                           onClick={handleSendMessage}
                        >
                           Send
                        </SendButton>
                     </Box>
                  </Box>
               )}
            </Box>
         </Aux>
         <HistoryBox>
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
