import React, { useState } from 'react';
import './chatDetail.css';
import { Box } from '@mui/material';

export const ChatDetail = () => {
   const [chats, setChats] = useState(false);

   return (
      <Box
         style={{
            backgroundColor: 'red',
            height: '100vh',
            width: '81.7vw',
            display: 'flex',
         }}
      >
         <Box
            style={{ backgroundColor: 'green', height: '100vh', width: '30vw' }}
         ></Box>{' '}
         <Box
            style={{
               backgroundColor: 'purple',
               height: '100vh',
               width: '51.7vw',
            }}
         >
            <Box
               style={{
                  backgroundColor: 'brown',
                  height: '93vh',
                  width: '51.7vw',
               }}
            ></Box>
            <Box
               style={{
                  backgroundColor: 'blue',
                  height: '7vh',
                  width: '51.7vw',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
               }}
            >
               <input
                  style={{
                     backgroundColor: 'white',
                     width: '85%',
                     height: '80%',
                     border: '0vh',
                     outline: 'none',
                  }}
               ></input>
               <button
                  style={{
                     backgroundColor: 'yellow',
                     color: 'black',
                     width: '11%',
                     height: '50%',
                     border: '0vh',
                  }}
               >
                  Send
               </button>
            </Box>
         </Box>
      </Box>
   );
};
