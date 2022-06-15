import React, { useEffect } from 'react';
import './changePass.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NewNavbar } from './styledComponents';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, MenuItem, Menu } from '@mui/material';
import Logo from '../changeDataUser/logo/logoYT.png';
import { postUserGoogle } from '../../../../../Redux/Actions/actions';

export const ChangePass = () => {
   const { logout, user } = useAuth0();
   const dispatch = useDispatch();
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

   return (
      <>
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
         <div className='changePassContainer '>
            <div className='animate__animated animate__fadeIn'>
               <h1>Change Password</h1>
            </div>
            <div className='int'>
               <form className='change_formContainer animate__animated animate__fadeIn'>
                  <div>
                     <input
                        type='password'
                        name='Password'
                        placeholder='Password'
                        autoComplete='off'
                     />
                  </div>
                  <div>
                     <input
                        placeholder='Confirm Password'
                        type='password'
                        name='username'
                        autoComplete='off'
                     />
                  </div>
                  <div>
                     <input
                        placeholder='New Password'
                        type='password'
                        name='password'
                        autoComplete='off'
                     />
                  </div>

                  <button className='change_formButton'>Change Password</button>
               </form>
            </div>
         </div>
      </>
   );
};
