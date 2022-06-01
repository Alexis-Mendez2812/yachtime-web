import React from 'react'
import BannerHome from '../BannerHome/BannerHome'
import Footer from '../Footer/Footer'
import HomeYates from '../HomeYates/HomeYates'
import Navbar from '../Navbar/Navbar'
import YachtimeContact from '../YachtimeContact/YachtimeContact'
function Home() {
  return (
    <div>
        <Navbar />
        <BannerHome/>
        <HomeYates/>
        <YachtimeContact/>
        <Footer/>
    </div>
  )
}

export default Home