import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import Footer from '../Footer/Footer';
import HomeYates from '../HomeYates/HomeYates';
import Navbar from '../Navbar/Navbar';
import YachtimeContact from '../YachtimeContact/YachtimeContact';
import { Box } from '@mui/material';
function Home() {
   return (
      <Box>
         <Navbar />
         <BannerHome />
         <HomeYates />
         <YachtimeContact />
         <Footer />
      </Box>
   );
}

export default Home;
