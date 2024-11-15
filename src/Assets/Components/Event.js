import React from 'react'

const Event = () => {
  return (
    <div className='event'>
        <div className="container">
            <div className="up">
                <h1>Be <span>Up to Date</span> With New Events </h1>
                <p>Join our mailing list to receive news and announcements.</p>
                <div className="email">
                    <input type='text' placeholder='Email'/>
                    <button type='button' className='go'>Go</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Event
