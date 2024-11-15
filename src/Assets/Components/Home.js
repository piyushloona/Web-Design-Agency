import React from 'react';
import Header from './Header';
import Lead from './Lead';
import Company from './Company';
import Professional from './Professional';
import Prototype from './Prototype';
import Affordable from './Affordable';
import Team from './Team';
import Package from './Package';
import Event from './Event';
import News from './News';
import Footer from './Footer';
 

const Home = () => {
  return (
    <div className='home'>
            <Header/>
            <Lead/>
            <Company/>
            <Professional/>
            <Prototype/>
            <Affordable/>
            <Team/>   
            <Package/>
            <Event/>
            <News/>
            <Footer/>
         

    </div>
  )
}

export default Home;