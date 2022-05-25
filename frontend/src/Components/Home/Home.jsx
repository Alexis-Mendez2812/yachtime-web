import React from 'react'
import BannerHome from '../BannerHome/BannerHome'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import YachtimeContact from '../YachtimeContact/YachtimeContact'
import { useAuth0} from "@auth0/auth0-react";

function Home() {
const {user} = useAuth0();

console.log(user)
  return (
    <div>
        <Navbar />
        <BannerHome/>
        <YachtimeContact/>
        <Footer/>
    </div>
  )
}

export default Home