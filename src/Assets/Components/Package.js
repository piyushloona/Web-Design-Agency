import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const Package = () => {
  return (
    <div className='package'>
        <div className="container">
            <div className="web">
                <h1 className='pack'> Website Design <span>Packages </span></h1>
                <p className='offer'>We offer a few standard packages as well as custom projects. Our web design
                    <br/>
                    company specializes in the professional creation of unique sites.
                </p>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="landing">
                                <h3>Landing Page</h3>
                                <h1>$ 595 . <sup>99</sup></h1>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Terms -3 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>5-14 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Social Link</p>
                                </div>

                                <p>-</p>
                                <p>-</p>
                                <p>-</p>

                                <button type='button' className='plane'>Select Plane</button>
                            </div>


                        
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="app">
                                <h3>App Development</h3>
                                <h1>$ 595 . <sup>99</sup></h1>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Terms -3 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>5-14 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Social Link</p>
                                </div>

                                <p>-</p>
                                <p>-</p>
                                <p>-</p>

                                <button type='button' className='plane'>Select Plane</button>
                            </div>

                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="landing">
                                <h3>eCommerce</h3>
                                <h1>$ 595 . <sup>99</sup></h1>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Terms -3 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>5-14 days</p>
                                </div>
                                <div className="terms">
                                <CheckIcon className='check'/>
                                <p>Social Link</p>
                                </div>

                                <p>-</p>
                                <p>-</p>
                                <p>-</p>

                                <button type='button' className='plane'>Select Plane</button>
                            </div>


                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Package