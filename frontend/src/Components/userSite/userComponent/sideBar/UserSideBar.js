import React from 'react';
import { Link } from 'react-router-dom';
import './userSideBar.css';
import logo from '../../../Navbar/logo/logoYT.png';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '../styledComponents.js';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChatIcon from '@mui/icons-material/Chat';
import AnchorIcon from '@mui/icons-material/Anchor';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
export const UserSidebar = () => {
   const { role } = useSelector(
      (state) => state.userSession
   );
   return (
      <Container>
         <div id='viewport'>
            <div id='sidebar'>
               <header className='imgYTw'>
                  <Link to='/'>
                     <img src={logo} alt='yachtimeLogo' className='imgw ' />
                  </Link>
               </header>
               <ul className='nav'>
                  <li>
                     <Link to='/home'>
                        <HomeIcon />
                        Dashboard
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/data'>
                        <PersonIcon />
                        Profile
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/myYacht'>
                        <AnchorIcon />
                        My Yachs
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/chats'>
                        <ChatIcon />
                        Chats
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/newproduct'>
                        <AddCircleOutlineIcon />
                         Create Yach
                     </Link>
                  </li>
{   (role ==="ROLE_ADMIN" || role ==="ROLE_SUPER_ADMIN") &&    <li>
                     <Link to='/admin'>
                        <AdminPanelSettingsIcon />Admin
                     </Link>
                  </li>}
               </ul>
            </div>
         </div>
      </Container>
   );
};
