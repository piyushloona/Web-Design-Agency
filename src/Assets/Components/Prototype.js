import React from 'react'
import pic from '../images/proto1.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const Prototype = () => {

  return (
    <div className='prototype'>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="left">

                        <img src={pic}/>
                        <PlayArrowIcon className='play'/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="right">
                        <h1>Get a <span>Free</span> Proptotype <br/> of Your Future Website !</h1>
                        <p>Send your requirements for a website, we will <br/> research your specification, create a prototype of the <br/> website for free and sed a result to you!</p>
                        <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Your Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Country Code">
        <Form.Control type="nuumber" placeholder="Password" />
      </FloatingLabel>
     
        <Form.Control
          as="textarea"
          placeholder="Messages"
          style={{ height: '100px' }}
        />
       
        <Button className='sub'>Submit</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Prototype