import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './Footer.module.css';
import { Box } from '@mui/material';
import {
   ButtonGet,
   PicBox,
   Get,
   M,
   T,
   LinksBox,
   AppPics,
   Foot,
   FooterBox,
} from './StyledComponents';

function Footer() {
   const navigate = useNavigate();
   const handleGoToMembership = () => {
      navigate('/membership');
   };

   return (
      <Box>
         <div className={style.imgMembership}>
            <PicBox>
               <Get>Get the</Get>
               <M>MemberShip</M>
               <T>
                  Designed for individuals and companies that would like to
                  entertain of yachs. throughout the year. Featuring discounted
                  pricing, exclusive events and special partner offers.
               </T>
               <a href='#paid'>
                  <ButtonGet onClick={handleGoToMembership}>
                     GET IT NOW
                  </ButtonGet>
               </a>
            </PicBox>
         </div>
         <Foot>
            <FooterBox>
               <AppPics>
                  <img
                     src='https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png'
                     className={style.descarga}
                     alt=''
                  />
                  <img
                     src='https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png'
                     className={style.descarga}
                     alt=''
                  />
               </AppPics>
               <LinksBox>
                  <Link to={'/contactUs'}>Contact us</Link>
                  <Link to={'/service'}>Terms of service</Link>
                  <Link to={'/privacy'}>Privacy policy</Link>
                  <br />
               </LinksBox>
               <span style={{ color: 'white' }}>&copy; 2022 Yachtimeapp</span>
            </FooterBox>
         </Foot>
      </Box>
   );
}

export default Footer;
