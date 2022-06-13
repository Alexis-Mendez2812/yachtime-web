import React from 'react';
import { Link } from 'react-router-dom';
import './userSideBar.css';
import logo from '../../../Navbar/logo/logoYT.png';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '../styledComponents.js';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const UserSidebar = () => {
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
                        <i className='fa-solid fa-ellipsis-vertical'></i>
                        Profile
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/myYacht'>
                        <i className='fa-solid fa-sailboat'></i>My Yacht
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/chats'>
                        <i className='fa-solid fa-comments'></i>
                        Chats
                     </Link>
                  </li>
                  <li>
                     <Link to='/userSite/newproduct'>
                        <AddCircleOutlineIcon />
                         Create Yach
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </Container>
   );
};
