import React from 'react'
import pic from '../images/company_1.jpg';
import pic1 from '../images/company_sign.png';

const Company = () => {
  return (
    <div className='company'>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="company_left">
                        <img src={pic}/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="company_right">
                        <h2>Web Design Company <br/> You Can <span>Trust </span></h2>
                        <p>Our web design company specializes in the <br/> professional creation of unique sites. Our team <br/> constantly monitors the emergence of new <br/> technologies that we are not afraid to <br/> implement in web projects, making them <br/> modern and high-tech.</p>
                        <div className="director">
                            <img src={pic1}/>
                            <p><span>Brian Detrix,</span>Executive Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company