import React from 'react'
import './file.css'
import '../index.css'
import cyptImg from '../media/cryptocurrency-tracker.png'


function Hero() {
  return (
    <div className='hero'>
        <div className='left-container'>
            <h3>Track all your Cryptos at one Place:</h3>
            <h1>The CryptoTracker</h1>
            <p>
            Cryptocurrencies have been described as a transformative technology that could revolutionize a number of industries.
Because they cannot be printed or seized, cryptocurrencies may also provide a safe store of value.
However, cryptocurrencies remain highly speculative, and there is no guarantee that they will ever achieve mainstream usage.
There are several complex security protocols that should be followed carefully before buying cryptocurrency.
            </p>
            
        </div>
        <div className='right-container'>
            <div className='image-container'><img src={cyptImg} alt='Crypto' /></div>
        </div>
    </div>
  )
}

export default Hero