import React from 'react'
import pic from '../images/easy.jpg';
import pic1 from '../images/business.jpg';

import {  Link, NavLink } from "react-router-dom";

const News = () => {
  return (
    <div className='news'>
        <div className="container">
            <div className="recent">
                <h1 className='rec'>Recent <span>News</span></h1>
                <p className='check'>
                Check more posts in the blog for more inspiration. We will keep you updated on
                <br/>
                the latest developments. It will be interesting!
                </p>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="easy">
                            <div className="images">
                                <img src={pic}/>

                            </div>
                            <div className="date">
                                <p className='ap'>April 12,2020</p>
                                <Link to="/" className='many'>Many Popins</Link>
                                <p>News</p>
                            </div>

                            <h3 className='feedback'>Easy Ways to Incorporate Customer Feedback</h3>
                            <p className='such'>The benefits of such a platform include submersing the user in <br/> the brand's content. Users will be more likely to…</p>
                            <Link to="/" className='continue'>Continue Reading</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="easy">
                            <div className="images">
                                <img src={pic1}/>

                            </div>
                            <div className="date">
                                <p className='ap'>April 12,2020</p>
                                <Link to="/" className='many'>Many Popins</Link>
                                <p>News</p>
                            </div>

                            <h3 className='feedback'>How to Create a website for your Own </h3>
                            <p className='such'>The benefits of such a platform include submersing the user in <br/> the brand's content. Users will be more likely to…</p>
                            <Link to="/" className='continue'>Continue Reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News