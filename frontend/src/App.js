import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import { Box } from '@mui/material';
import { WppAvatar } from './Components/Home/styledComponents';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { LoginForm } from './Components/Login/LoginForm.jsx';
import { RegisterForm } from './Components/Login/RegisterForm.jsx';
import Loading from './Components/Loading/Loading.jsx';
import { Profile } from './Components/Login/Profile.jsx';
import NewProduct from './Components/NewProduct/NewProduct.jsx';
import Uploading from './Components/Uploading/Uploading.jsx';
import Admin from './Components/Admin/Admin';

import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Membership from './Components/Membership/Membership.jsx';

import PayPal from './Components/PayPal/PayPal';
import CardDetail from './Components/CardDetail/CardDetail.jsx';
import Pay from './Components/Pay/Pay.jsx';
import { UserSite } from './Components/userSite/UserSite.js';

function App() {
   return (
      <div className='App'>
         <WppAvatar>
            <WhatsAppIcon sx={{ fontSize: 50 }} />
         </WppAvatar>

         <BrowserRouter>
            <Routes>
               <Route path='/paypal' element={<PayPal />} />
               <Route path='/admin' element={<Admin />} />
               <Route path='/Uploading' element={<Uploading />} />
               <Route path='/newproduct' element={<NewProduct />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/contactUs' element={<ContactUs />} />
               <Route path='/membership' element={<Membership />} />
               <Route path='/loading' element={<Loading />} />
               <Route path='/login' element={<Login />} />
               <Route path='/loginForm' element={<LoginForm />} />
               <Route path='/registerForm' element={<RegisterForm />} />
               <Route exact path='/' element={<Home />} />
               <Route path='/' element={<Navbar />} />
               <Route path='/newproduct' element={<NewProduct />} />
               <Route path='/CardDetail/:id' element={<CardDetail />} />
               <Route path='/paypal/pay/:mount' element={<Pay />} />
               <Route path='/userSite' element={<UserSite />} />
               <Route path='/userSite/*' element={<UserSite />} />
               <Route path='*' element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
