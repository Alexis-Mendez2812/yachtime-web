import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import {
   TextContainer,
   Title,
   Ul,
   Subtitle,
   Li,
   ParaBox,
   Text,
} from './styledComponents';
import {
   para1,
   para2,
   para3,
   para4,
   para5,
   para6,
   para7,
   para8,
   para9,
   para10,
   para11,
   para12,
   para13,
   para14,
   para15,
   para16,
   para17,
   para18,
   para19,
   para20,
   para21,
   para22,
   para23,
   para24,
   para25,
   para26,
   para27,
   para28,
   para29,
   para30,
} from './text';

const Privacy = () => {
   useEffect(() => {
      window.scroll(0, 0);
   }, []);

   return (
      <>
         <Navbar />
         <TextContainer>
            <Title>PRIVACY POLICY</Title>
            <Subtitle style={{ marginBottom: '1.9rem' }}>YACHTIME APP</Subtitle>
            <ParaBox>
               <Text>{para1}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para2}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para3}</Text>
            </ParaBox>
            <ParaBox style={{ flexDirection: 'column' }}>
               <Text>{para4}</Text>
               <a
                  href='http://www.export.gov/safeharbor/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <Text style={{ color: 'blue', fontSize: '1.3rem' }}>
                     http://www.export.gov/safeharbor/
                  </Text>
               </a>
            </ParaBox>
            <ParaBox>
               <Subtitle>INFORMATION WE COLLECT</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para5}</Text>
            </ParaBox>
            <ParaBox style={{ flexDirection: 'column' }}>
               <Text>{para6}</Text>
               <Ul>
                  <Li>Email</Li>
                  <Li>First and Last Name</Li>
                  <Li>Phone Number</Li>
               </Ul>
            </ParaBox>
            <ParaBox style={{ flexDirection: 'column' }}>
               <Text>{para7}</Text>
               <Ul>
                  <Li>Credit Card Number</Li>
                  <Li>Address</Li>
                  <Li>Other Payment Details</Li>
                  <Li>Passenger Names</Li>
                  <Li>Date of Birth of Passengers</Li>
                  <Li>Passport of Drivers License Information of Passengers</Li>
               </Ul>
            </ParaBox>
            <ParaBox>
               <Text>{para8}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para9}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para10}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para11}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para12}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para13}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para14}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>HOW WE USE YOUR INFORMATION</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para15}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para16}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>SERVICE-RELATED ANNOUNCEMENTS</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para17}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para18}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>CUSTOMER SERVICE</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para19}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>OUR DISCLOSURE OF YOUR INFORMATION</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para20}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para21}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para22}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para23}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para24}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para25}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>ACCESS TO PERSONAL INFORMATION</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para26}</Text>
            </ParaBox>
            <ParaBox>
               <Text>{para27}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>SECURITY</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para28}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>SOCIAL MEDIA (FEATURES) AND WIDGETS</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para29}</Text>
            </ParaBox>
            <ParaBox>
               <Subtitle>CHANGES IN THIS PRIVACY POLICY</Subtitle>
            </ParaBox>
            <ParaBox>
               <Text>{para30}</Text>
            </ParaBox>
            <ParaBox style={{ flexDirection: 'column' }}>
               <Text>Contact us by postal mail: </Text>
               <Text>Yachtime app’s</Text>
               <Ul>
                  <Li>7751 nw 107 ave unit 817 doral Fl 33178</Li>
                  <Li>United States</Li>
                  <Li>yachtime.app@gmail.com</Li>
               </Ul>
            </ParaBox>
         </TextContainer>
         <Footer />
      </>
   );
};

export default Privacy;
