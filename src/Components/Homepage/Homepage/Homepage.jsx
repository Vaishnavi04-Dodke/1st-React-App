import React from 'react'
import Banner from '../Banner/Banner'
import BannerItem from '../Banner-Item/BannerItem'
// import About from '../../About Us/About';
import Services from '../../Services/Services';
import Bussines from '../../Bussiness/Bussines';
import Testominal from '../../Testimonal/Testominal';
import Features from '../../Features/Features';

function Homepage() {
  return (
   <>
   <Banner/>
   <BannerItem/>
   <Features/>
   <Services/>
   <Bussines/>
   <Testominal/>

   </>
  )
}

export default Homepage;