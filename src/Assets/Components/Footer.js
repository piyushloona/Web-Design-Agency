import React from 'react'
import {  Link, NavLink } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="about">
                    <h2>About</h2>
                    <hr/>
                    <p>We have much planned for the future, working with great clients and continued software development

</p>
                    <ul>
                        <li><Link to="/">+1 963 542 78 32</Link></li>
                        <li><Link to="/">info@example.com</Link></li>
                        <li>Follow us 
                            <div className="icons">
                                <Link to="/"><TwitterIcon className="facebook"/></Link>
                                <Link to="/"><InstagramIcon className="facebook"/></Link>
                                <Link to="/"><LinkedInIcon className="facebook"/></Link>
                                
                            </div>



                        </li>
                        
                    </ul>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="recent">
                        <h2>Recent News</h2>
                        <hr/>
                        <p className='date'>April 2, 2022</p>
                        <Link to="/" className='ways'>Easy way to Incorporate Customer <br/>Feedback</Link>
                        <p className='date'>April 2, 2022</p>
                        <Link to="/" className='ways'> How to Create a Website for your Own  <br/>Business</Link>
                        
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="letter">
                        <h2>News Letter</h2>
                        <hr/>
                        <p>Join our mailing list to receive 
                            <br/>news and announcements</p>
                        <input type='text' placeholder='Your e-mail' className='form-control'/>
                        <button type='button' className='btn btn-primary subscribe '>Get a Subscribe</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer