import React from 'react'
import { Header ,Logo, SearchSection,Slider } from '../components'
const Banner = () => {
  return (
    <div className="container-fluid" id='home_banner'>
         <Header/>
          <Logo/>
          <SearchSection/>
          <Slider/>
    </div>
  )
}

export default Banner