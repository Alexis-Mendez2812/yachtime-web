import React from 'react'
import BannerHome from '../BannerHome/BannerHome'
import Navbar from '../Navbar/Navbar'
import YachtimeContact from '../YachtimeContact/YachtimeContact'
function Home() {
  return (
    <div>
        <Navbar />
        <BannerHome/>
        <YachtimeContact/>
    </div>
  )
}

export default Home