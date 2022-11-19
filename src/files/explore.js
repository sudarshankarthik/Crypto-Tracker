import React from 'react'
import axios from 'axios'
import './file.css'
import '../index.css'
import { useState, useEffect } from 'react'
import Card from './card'
import { Link } from 'react-router-dom'

const Explore = () => {


  const [data, setData] = useState(null)

  const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'

  useEffect(() => {
      axios.get(api).then((response) => {
          setData(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])


  // if (!data) alert('Unable to load crypto values')
  if (!data) return null
  
  return (    
<div className='explore container'>
    <div className='left-container'>
      <h2>Explore hundreds of crypto currences using CryptoTracker</h2>
      <p>Click on Individual cryptocuency to get more info on that currency</p>
      <Link to="/Table" className='btn'>Explore Even More Cryptocurrencies</Link>
    </div>
    <div className='right-container'>
      <Card data={data} i = {0} />
      <Card data={data} i = {1} />
      <Card data={data} i = {2} />
      <Card data={data} i = {3} />
      <Card data={data} i = {4} />
      <Card data={data} i = {5} />
    <div>

</div>
    </div>
</div>
  )
}

export default Explore