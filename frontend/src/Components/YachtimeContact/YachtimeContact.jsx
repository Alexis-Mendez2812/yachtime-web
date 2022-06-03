import React, { useState } from 'react';
import style from './YachtimeContact.module.css';
import angel from './staff/angel.jpg';
import david from './staff/david.jpg';
import diego from './staff/diego.jpg';
import valeria from './staff/valeria.jpg';
import { SiInstagram } from 'react-icons/si';
import { Box } from '@mui/material';
import { MapContainer } from './styledComponents';

function YachtimeContact() {
   const [mapRef, setMapRef] = useState(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2598245325494!2d-80.25231148565965!3d25.79500091351838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb1cd85cc52f%3A0x6c3c779175916b87!2sYachtime%20Miami!5e0!3m2!1ses!2sar!4v1653417999814!5m2!1ses!2sar'
   );

   return (
      <div className={style.YachtimeContact}>
         <h1 className={style.title}>Yachtimeapp's Crew</h1>

         {/* STAFF */}
         <div className={style.divImages}>
            <div className={style.staff}>
               <img src={angel} alt='angel' className={style.img} />
               <span>Angel L.</span>
               <h3>CEO\Founder</h3>
               <a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y='>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={david} alt='david' className={style.img} />
               <span>David G.</span>
               <h3>COO\Founder</h3>
               <a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y='>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={valeria} alt='valeria' className={style.img} />
               <span>Valeria F.</span>
               <h3>Concierge</h3>
               <a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y='>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={diego} alt='diego' className={style.img} />
               <span>Diego C.</span>
               <h3>Concierge</h3>
               <a href='https://www.instagram.com/yatchtimeapp/?igshid=YmMyMTA2M2Y='>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
         </div>
         {mapRef && (
            <MapContainer>
               <iframe
                  src={mapRef}
                  style={{ border: '0', width: '100vw', height: '20vh' }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
               ></iframe>
               <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <h3 style={{ color: 'white', fontWeight: '400' }}>
                     +1 786-721-2525
                  </h3>
                  <span style={{ color: 'white' }}>
                     3300 NW 21st St, Miami, FL 33142
                  </span>
                  <p style={{ color: 'white' }}>United States</p>
               </Box>
            </MapContainer>
         )}
      </div>
   );
}

export default YachtimeContact;
