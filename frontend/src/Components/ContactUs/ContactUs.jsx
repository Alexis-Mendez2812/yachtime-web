import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';
import { DataBox, DataGraphy } from './styledComponents';
import { WppAvatar } from '../Home/styledComponents';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSelector } from 'react-redux';
function ContactUs() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   const aux = useSelector((state) => {
      return state.aux;
   });
   return (
      <>
         <Navbar />
         {!aux && (
            <a href='https://wa.link/tgghvx' target='_blank' rel='noreferrer'>
               <WppAvatar>
                  <WhatsAppIcon sx={{ fontSize: 50 }} />
               </WppAvatar>
            </a>
         )}
         <DataBox>
            <h3 style={{ color: 'white', fontSize: '2rem' }}>Contact</h3>
            <h3 style={{ color: 'white', fontSize: '2rem' }}>
               +1 786-721-2525
            </h3>
            <DataGraphy>3300 NW 21st St, Miami, FL 33142</DataGraphy>
            <p
               style={{
                  color: 'white',
                  fontSize: '2rem',
                  marginBottom: '-0.01rem',
               }}
            >
               United States
            </p>
            <br></br>
         </DataBox>

         <Box>
            <iframe
               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2598245325494!2d-80.25231148565965!3d25.79500091351838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb1cd85cc52f%3A0x6c3c779175916b87!2sYachtime%20Miami!5e0!3m2!1ses!2sar!4v1653417999814!5m2!1ses!2sar'
               style={{
                  border: '0',
                  width: '100vw',
                  height: '14rem',
               }}
               allowFullScreen=''
               loading='lazy'
               referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
         </Box>

         <Footer />
      </>
   );
}

export default ContactUs;
