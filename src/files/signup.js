import React from 'react'
import './file.css'
import Footer from './footer'
import Crypto from '../media/signup.jpg'

const Signup = () => {
    return (
        <div>
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn with crypto.</h2>
                    <p>
                    Everyone gets into the cryptocurrency field to make money, but not all end up doing that. A lot of people either simply give up along the way, or lose money because they do not properly understand how to make money with cryptocurrency. 
                    </p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
            <Footer />
            </div>
        </div>
    )
}

export default Signup