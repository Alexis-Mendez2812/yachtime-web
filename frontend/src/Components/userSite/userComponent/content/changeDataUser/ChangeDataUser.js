import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUserGoogle } from '../../../../../Redux/Actions/actions';
import { Link, useNavigate } from 'react-router-dom';
import '../dataUser/dataUser.css';
import './changeDataUser.css';
import { Container, Container2, NewNavbar, FormBox } from './styledComponents';
import Logo from './logo/logoYT.png';
import { Avatar, MenuItem, Menu, TextField } from '@mui/material';
import { editUserData } from '../../../../../Redux/Actions/ChatActions/chatActions';

export const ChangeDataUser = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { logout, user } = useAuth0();
   const { email, firtsName, lastName, picture, userName } = useSelector(
      (state) => state.userSession
   );
   const [data, setData] = useState({
      e: email,
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
   });

   const handleInputChage = (e) => {
      e.preventDefault();
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      editUserData(data);
      navigate('/home');
   };

   useEffect(() => {
      setData({
         ...data,
         firstName: firtsName,
         lastName: lastName,
         email: email,
         userName: userName,
      });
   }, [email, firtsName, lastName, userName]);
   useEffect(() => {
      dispatch(postUserGoogle(user));
   }, [dispatch, user]);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div className='backdataUser'>
         <Container>
            <div className='change_DataUser_imgProfile'>
               <div className='DataUser_button'>
                  <Link to='/userSite/changepass'>
                     <div className=' btnData passwordColor'>
                        Change Password
                     </div>
                  </Link>
                  <div
                     onClick={() =>
                        logout({ returnTo: window.location.origin })
                     }
                     className=' btnData logOutColor'
                  >
                     Log Out
                  </div>
               </div>
               <Avatar alt='' src={picture} sx={{ width: 56, height: 56 }} />
            </div>
            <div style={{ marginTop: '8rem' }} className='changeDataContainer '>
               <div className='int'>
                  <form className='change_formContainer animate__animated animate__fadeIn'>
                     <div>
                        <input
                           type='text'
                           name='firstName'
                           placeholder='First Name'
                           autoComplete='off'
                           value={data.firstName}
                           onChange={handleInputChage}
                        />
                        <input
                           placeholder='Last Name'
                           type='text'
                           name='lastName'
                           value={data.lastName}
                           onChange={handleInputChage}
                           autoComplete='off'
                        />
                     </div>
                     <div>
                        <input
                           placeholder='Email'
                           type='text'
                           name='email'
                           value={data.email}
                           onChange={handleInputChage}
                           autoComplete='off'
                        />
                        <input
                           placeholder='Username'
                           type='text'
                           name='userName'
                           onChange={handleInputChage}
                           value={data.userName}
                           autoComplete='off'
                        />
                     </div>

                     <button
                        onClick={handleSubmit}
                        className='change_formButton'
                     >
                        Change Data User
                     </button>
                  </form>
               </div>
            </div>
         </Container>
         <Container2>
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
            <FormBox>
               <TextField
                  variant='standard'
                  placeholder='First Name'
                  style={{ width: '85%' }}
                  onChange={handleInputChage}
                  name='firtsName'
                  autoComplete='off'
                  value={data.firstName}
               />
               <TextField
                  variant='standard'
                  placeholder='Last Name'
                  style={{ width: '85%' }}
                  name='lastName'
                  onChange={handleInputChage}
                  value={data.lastName}
                  autoComplete='off'
               />
               <TextField
                  variant='standard'
                  placeholder='Email'
                  name='email'
                  value={data.email}
                  onChange={handleInputChage}
                  autoComplete='off'
                  style={{ width: '85%' }}
               />
               <TextField
                  variant='standard'
                  placeholder='Username'
                  name='userName'
                  value={data.userName}
                  onChange={handleInputChage}
                  autoComplete='off'
                  style={{ width: '85%' }}
               />

               <button
                  style={{ width: '75%' }}
                  onClick={handleSubmit}
                  className='change_formButton'
               >
                  Change Data User
               </button>
            </FormBox>
         </Container2>
      </div>
   );
};
