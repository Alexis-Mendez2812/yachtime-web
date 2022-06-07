import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Loading from '../Loading/Loading';
import Carousel from 'react-material-ui-carousel';
import Drawer from '@mui/material/Drawer';
import { getAllUsers } from '../../Redux/Actions/actions';
import {
   saveAllMessages,
   bringAllMessages,
} from '../../Redux/Actions/ChatActions/chatActions';
import {
   Picture,
   PictureShadow,
   DataGraphy,
   FeatureBox,
   IconBox,
   DataTitle,
   InfoBox,
   Li,
   CarPic,
   TextChatBox,
   MessageGraphy,
   InputChatBox,
   MessageOwnerBox,
   DetailBox,
   DataPictureBox,
   MessageButton,
   ChatBox,
   TextBox,
   BackIcon,
   SendButton,
} from './styledComponents';
import { Box, TextField } from '@mui/material';
import { getIdYate, vaciar } from '../../Redux/Actions/actions';
import io from 'socket.io-client';
const socket = io.connect('https://yachtimeapp.herokuapp.com');
// const socket = io.connect('http://localhost:3001');

export default function GameDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   let { yateSelected, userSession, users } = useSelector((state) => {
      return state;
   });

   const [actualMessage, setActualMessage] = useState('');
   const [justMe, setJustMe] = useState([]);
   const [allMessages, setAllMessages] = useState([]);
   const [open, setOpen] = useState(false);
   const [room, setRoom] = useState('');
   const [boatOwner, setboatOwner] = useState('');

   useEffect(() => {
      dispatch(getIdYate(id));
      dispatch(vaciar());
      dispatch(getAllUsers());
   }, []);

   useEffect(() => {
      if (Object.keys(users).length > 0) {
         for (let i = 0; i < users.length; i++) {
            if (users[i].Products.length > 0) {
               for (let j = 0; j < users[i].Products.length; j++) {
                  if (users[i].Products[j].id === id) {
                     setRoom(`${users[i].userName}${userSession.userName}`);
                     setboatOwner(users[i].id);
                     break;
                  }
               }
            }
         }
      }
   }, [users]);

   useEffect(() => {
      socket.on('receive_message', (data) => {
         setAllMessages([...allMessages, data]);
      });
   });

   useEffect(() => {
      if (
         typeof userSession.id !== 'undefined' &&
         typeof boatOwner !== 'undefined'
      ) {
         bringAllMessages({ owner: userSession.id, receptor: boatOwner })
            .then((ans) => {
               if (Object.keys(ans).length) {
                  const ok = (
                     ans.allOwnerMessages && ans.allReceptorMessages
                        ? ans.allOwnerMessages.concat(ans.allReceptorMessages)
                        : ans.allOwnerMessages
                        ? ans.allOwnerMessages
                        : ans.allReceptorMessages
                  )
                     .sort((x, y) => {
                        if (x.id > y.id) {
                           return 1;
                        }
                        if (x.id < y.id) {
                           return -1;
                        }
                        return 0;
                     })
                     .map((m) => {
                        return m.message;
                     });
                  setAllMessages(ok);
                  console.log(ans);
               }
            })
            .catch(() => {
               console.log('HUBO PROBLEMA');
            });
      }
   }, [userSession.id, boatOwner]);

   const handleGoBack = () => {
      navigate('/');
   };

   const handleGoToMembership = () => {
      navigate('/membership');
   };

   const handleOpenDrawer = () => {
      if (open) {
         const data = {
            owner: userSession.id,
            to: boatOwner,
            messages: justMe,
         };
         saveAllMessages(data);
      }
      socket.emit('join_chat', room);
      setOpen(!open);
   };

   const handleNewMessage = () => {
      setAllMessages([...allMessages, actualMessage]);
      setJustMe([...justMe, actualMessage]);
      socket.emit('send_message', { actualMessage, room });
      setActualMessage('');
   };

   if (!Object.keys(yateSelected).length) {
      return <Loading />;
   } else {
      const {
         year,
         length,
         guests,
         beam,
         bathrooms,
         cabins,
         draft,
         cruiseVel,
         fuelCapacity,
         fuelType,
         waterCapacity,
         description,
         pictures,
      } = yateSelected;
      return (
         <>
            <div clasName='div-Navbar'>
               <Navbar />
            </div>
            <Picture
               style={{ backgroundImage: `url(${yateSelected.pictures[0]})` }}
            >
               <PictureShadow>
                  <IconBox>
                     <BackIcon onClick={handleGoBack} />
                  </IconBox>
                  <DataPictureBox>
                     <DataGraphy>
                        {yateSelected.model}' {yateSelected.make}
                     </DataGraphy>

                     {userSession.role === 'ROLE_PRIME' ? (
                        <MessageButton onClick={handleOpenDrawer}>
                           Contact The Owner
                        </MessageButton>
                     ) : (
                        <MessageButton onClick={handleGoToMembership}>
                           Get MemberShip
                        </MessageButton>
                     )}
                  </DataPictureBox>
               </PictureShadow>
            </Picture>
            <InfoBox>
               <FeatureBox style={{ width: '50vw' }}>
                  <DataTitle>Features</DataTitle>
                  <DetailBox>
                     <Li>Year: {year}</Li>
                     <Li>Beam: {beam}</Li>
                     <Li>Length: {length}</Li>
                     <Li>Guests: {guests}</Li>
                     <Li>Toilets: {bathrooms}</Li>
                     <Li>Cabins: {cabins}</Li>
                     <Li>Draft: {draft}</Li>
                     <Li>Cruise Velocity: {cruiseVel}</Li>
                     <Li>Fuel Capacity: {fuelCapacity}</Li>
                     <Li>Fuel Type: {fuelType}</Li>
                     <Li>Water Capacity: {waterCapacity}</Li>
                  </DetailBox>
               </FeatureBox>
               <FeatureBox style={{ width: '50vw' }}>
                  <DataTitle>Description</DataTitle>
                  <TextBox>{description}</TextBox>
               </FeatureBox>
            </InfoBox>
            <Box
               style={{
                  width: '100vw',
                  height: '70vh',
               }}
            >
               <Carousel interval={3500} animation='slide' duration={800}>
                  {pictures.map((item, index) => {
                     return (
                        <CarPic
                           key={index}
                           style={{ backgroundImage: `url(${item})` }}
                        />
                     );
                  })}
               </Carousel>
            </Box>
            <Drawer anchor={'right'} open={open} onClose={handleOpenDrawer}>
               <ChatBox>
                  <TextChatBox>
                     {allMessages.length > 0 &&
                        allMessages.map((m, i) => {
                           return (
                              <MessageOwnerBox key={i}>
                                 <MessageGraphy>{m}</MessageGraphy>
                              </MessageOwnerBox>
                           );
                        })}
                  </TextChatBox>
                  <InputChatBox>
                     <TextField
                        autoComplete='off'
                        variant='standard'
                        value={actualMessage}
                        onChange={(e) => setActualMessage(e.target.value)}
                        style={{
                           width: '78%',
                           border: 'yellow',
                           borderColor: 'yellow',
                           color: 'yellow',
                        }}
                     />
                     <SendButton onClick={handleNewMessage}>Send</SendButton>
                  </InputChatBox>
               </ChatBox>
            </Drawer>
         </>
      );
   }
}
