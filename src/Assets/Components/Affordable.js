import React from 'react'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BarChartIcon from '@mui/icons-material/BarChart';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';

const Affordable = () => {
  return (
    <div className='affordable'>
        <div className="container">
            <div className="aff">
                <h1 className='go'>How It Is <span>Going</span></h1>
                <p className='offer'>We offer professional web design services at affordable rates to help your business <br/>
                attract more visitors and keep them on your site!</p>


    <div className="back">
                <div className="full">
                    <div className="info">
                        <p>01</p>
                        <EmojiObjectsIcon className='light'/>
                        <h3>Info Gathering</h3>
                    </div>
                    <div className="planning ">
                        <p className='pp'>02</p>
                        <BarChartIcon className='bar'/>
                        <h3>Planning</h3>
                    </div>
                    <div className="design">
                        <p>03</p>
                        <EmojiObjectsIcon className='light'/>
                        <h3>Design</h3>
                    </div>
                    <div className="planning ">
                        <p>04</p>
                        <DesktopAccessDisabledIcon className='bar'/>
                        <h3>Development</h3>
                    </div>
                    <div className="launch">
                        <p>05</p>
                        <EmojiObjectsIcon  className='light'/> 
                        <h3>Testing & Launch</h3>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Affordable