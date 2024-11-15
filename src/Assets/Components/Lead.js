import React from 'react'
import pic1 from '../images/Frame1.png';
import pic2 from '../images/leave.png';
import pic3 from '../images/lead-after.png';
const Lead = () => {
  return (
    <div className='lead'>
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-6">
                    <div className="lead-left">
                        <img src={pic3}/>
                        <h1>Website That <span>Lead</span><br/>Customers</h1>
                        <p>Our website design company specializes in the <br/>professional creation of unique sites </p>
                        <button type='button' className='read'>Read More</button>

                    </div>



                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="lead-right">
                        <img src={pic1} className='first_pic'/>
                        <img src={pic2} className='second_pic'/>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Lead