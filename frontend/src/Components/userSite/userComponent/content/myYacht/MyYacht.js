import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardYate } from './cardYate/CardYate';
import { allYates } from '../../../../../Redux/Actions/actions';
import { Link } from 'react-router-dom';
import { NewNavbar, Aux } from './styledComponents';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, MenuItem, Menu } from '@mui/material';
import Logo from '../changeDataUser/logo/logoYT.png';
import { postUserGoogle } from '../../../../../Redux/Actions/actions';

import './myYacht.css';

export const MyYacht = () => {
   const { logout, user } = useAuth0();
   const dispatch = useDispatch();
   const yates = useSelector((state) => {
      return state.myYates;
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

   useEffect(() => {
      dispatch(allYates());
   }, [dispatch]);

   return (
      <div>
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
         </Aux>
         {yates.length > 0 ? (
            <div className='div-b'>
               <div className='yacht-main'>
                  <h2>My Active Yatch</h2>
                  <div className='card_yates_container'>
                     {yates?.map((yate) => (
                        <CardYate key={yate.id} yate={yate} />
                     ))}
                  </div>
               </div>
            </div>
         ) : (
            <div className='myYatchNoYacth'>
               <h2>You don't have any yacht yet.</h2>
               <p> do you want to add one?</p>
               <Link to='/userSite/newproduct'>
                  <div className=' btnData passwordColor'>Create new Yacht</div>
               </Link>
            </div>
         )}
      </div>
   );
};
