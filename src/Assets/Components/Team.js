import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import pic from '../images/team1.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Team = () => {
  return (
    <div className='team'>
        <div className="container">

        <h1 className='creative'> Our Creative <span>Team</span></h1>
        <p className='commited'>We are committed to using fact-based knowledge and our unique brand of innovation to help
        <br/>
        you dominate the competition.
        </p>
        <div className="member">
        <Swiper
      spaceBetween={30}
      centeredSlides={false}
      loop={true}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
      }}
      breakpoints={{
        480:{
            slidesPerView: 2,
            spaceBetween: 5,
        
        },
        576:{
            slidesPerView: 2,
            spaceBetween: 5,
        
        },
          768: {
              slidesPerView: 2,
              spaceBetween: 5,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 20,
          },

          1200: {
              slidesPerView: 5,
              spaceBetween: 30,
          },
      }}
    //   pagination={{
    //       clickable: true,
    //   }}
      navigation={true}
    //   modules={[Autoplay, Navigation]}
      className="mySwiper" 
    >
      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>
    
      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>
    

      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>


      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>

      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>
      <SwiperSlide>
<div className="manager">
<img src={pic}/>
<div className="mem">
<div className="icons">
    <FacebookIcon className='facebook'/>
    <TwitterIcon className='facebook'/>
    <LinkedInIcon className='facebook'/>
</div>
<div className="doe">
    <h3>John Doe</h3>
    <p>Manager</p>
</div>
</div>
</div>


     
      </SwiperSlide>
    </Swiper>
        </div>

      
    </div>
    </div>

  )
}

export default Team