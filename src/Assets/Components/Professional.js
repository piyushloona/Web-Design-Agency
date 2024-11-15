import React from 'react'
import pic from '../images/create_pic.jpg';
import pic1 from '../images/create_pic1.jpg';
import pic2 from '../images/create_pic2.jpg';
import pic3 from '../images/create_pic3.jpg';
import pic4 from '../images/create_pic4.jpg';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import {  Link } from "react-router-dom";

const Professional = () => {
  return (
    <div className='professional'>
        <div className="container">
            <div className="row satis">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="p_first">
                        <h2>32 <span>+</span></h2>
                        <p>Professional Team</p>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="p_first">
                        <h2>200 <span>+</span></h2>
                        <p>Satisfied Customers</p>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="p_first">
                        <h2>175<span>+</span></h2>
                        <p>Successful Projects</p>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="p_first">
                        <h2>8<span>+</span></h2>
                        <p>Year of Experience</p>
                    </div>
                </div>

            </div>
            <div className="images">
                <div className="creation">
                    <div className="left">
                    <img src={pic}/>
                    <div className="text">
                    <h3>Website <br/>
                    Creation
                    </h3>
                    </div>
                    </div>
                </div>
                <div className="creation">
                    <div className="left">
                    <img src={pic1}/>
                    <div className="text">
                    <h3>Website <br/>
                    Creation
                    </h3>
                    </div>
                    </div>
                </div>
                <div className="creation">
                    <div className="left">
                    <img src={pic2}/>
                    <div className="text">
                    <h3>Website <br/>
                    Creation
                    </h3>
                    </div>
                    </div>
                </div>
                <div className="creation">
                    <div className="left">
                    <img src={pic3}/>
                    <div className="text">
                    <h3>Website <br/>
                    Creation
                    </h3>
                    </div>
                    </div>
                </div>
                <div className="creation">
                    <div className="left">
                    <img src={pic4}/>
                    <div className="text">
                    <h3>Website <br/>
                    Creation
                    </h3>
                    </div>
                    </div>
                </div>
               
            </div>

            <div className="row development">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="full">
                        <h2>Full Range of Web <br/>Design <span>Services</span></h2>
                        <p>We offer professional web design services <br/> at affordable rates to help your business <br/> attract more visitors and keep <br/> them on your site!</p>
                        <button type='button' className='view'>View All Services</button>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="develop">
                        <CloudQueueIcon className='cloud_icon'/>
                        <h3>Web Devleopment</h3>
                        <p>We start from structuring information <br/>architecture and  functionalities.</p>
                        <div className="more">
                            <Link to="/">Read More <span><TrendingFlatIcon className='trend'/></span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4  col-md-6 col-sm-6">
                    <div className="develop">
                        <CloudQueueIcon className='cloud_icon'/>
                        <h3>Web Devleopment</h3>
                        <p>We start from structuring information <br/>architecture and  functionalities.</p>
                        <div className="more">
                            <Link to="/">Read More <span><TrendingFlatIcon className='trend'/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row development mt-2">
                <div className="col-xl-4 dn">
                    
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="develop">
                        <CloudQueueIcon className='cloud_icon'/>
                        <h3>Web Devleopment</h3>
                        <p>We start from structuring information <br/>architecture and  functionalities.</p>
                        <div className="more">
                            <Link to="/">Read More <span><TrendingFlatIcon className='trend'/></span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="develop">
                        <CloudQueueIcon className='cloud_icon'/>
                        <h3>Web Devleopment</h3>
                        <p>We start from structuring information <br/>architecture and  functionalities.</p>
                        <div className="more">
                            <Link to="/">Read More <span><TrendingFlatIcon className='trend'/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Professional