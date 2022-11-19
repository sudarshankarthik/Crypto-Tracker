import React from 'react'
import './file.css'
import '../index.css'
import { Link } from 'react-router-dom'

const nav = () => {

  const toHome = () => window.location.href = "/";

  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'><h2 onClick={toHome}>CryptoTracker</h2></div>
        <div className='nav-bar'>
            <Link to="/#">Home</Link>
            <Link to="/#explore">Explore</Link>
            <Link to="/#signup">Learn More</Link>
            <Link to="/#">About Us</Link>
          <div className='btns'>
            <button>My Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default nav