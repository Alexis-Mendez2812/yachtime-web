import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewProduct from '../NewProduct/NewProduct';
import { ChangeDataUser } from './userComponent/content/changeDataUser/ChangeDataUser';
import { ChangePass } from './userComponent/content/changePassword/ChangePass';
import { ChatDetail } from './userComponent/content/chats/ChatDetail';
import { MyYacht } from './userComponent/content/myYacht/MyYacht';
import { UserSidebar } from './userComponent/sideBar/UserSideBar';
import './userSite.css';
import { Box } from '@mui/material';

export const UserSite = () => {
   return (
      <Box>
         <div className='userSiteCont'>
            <UserSidebar />
            <div className='dataRouteCont'>
               <Routes>
                  <Route path='changepass' element={<ChangePass />} />
                  <Route path='data' element={<ChangeDataUser />} />
                  <Route path='myYacht' element={<MyYacht />} />
                  <Route path='newproduct' element={<NewProduct />} />
                  <Route path='chats' element={<ChatDetail />} />
               </Routes>
            </div>
         </div>
      </Box>
   );
};
