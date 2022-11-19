import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { CoinList } from './api';
import Nav from '../files/nav';
import { Link } from 'react-router-dom';
import '../files/file.css'
import '../index.css'
import Footer from '../files/footer'
import { Button, MenuItem, Select, SelectChangeEvent} from '@material-ui/core';

const Table = () => {
  const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
  const [coins, setCoins] = useState([]);

  const [start, setStart] = useState(0);  
  const [end, setEnd] = useState(10);  
  const [step, setStep] = useState(10);  

  useEffect(() => {
    axios.get(api).then((response) => {
        setCoins(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

  const handleBound = (c) => {

    if(c == 1  || c == 0) {
    if(start < 1) {
      setStart(0)
      setEnd(start + step)
    }}

    if(c == 2  || c == 0) {
    if(end > 99) {
      setEnd(100)
      setStart(end - step)
    }}

  }

  const changeStep = (event) => {
      setStep(event.target.value)
      handlePrev()
    }

    const handlePrev = () => {
      var newPrv = start - step
      
      setStart(newPrv)
      setEnd(newPrv + step)
      handleBound(1)
      
  }
    
    const handleNext = () => {
      var newNext = start + step

      setStart(newNext)
      setEnd(newNext + step)
      handleBound(2)
      
  }

function numDifferentiation(value) {
  var val = Math.abs(Number(value))
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2) + ' Cr';
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2) + ' Lac';
  }
    else {
      val = val.toFixed(2)
    }
  return val;
}
  const mini = coins.slice(start, end);
  const mega =  mini.map((coin, index) => {
    return <tr key={index} className="coin-display">
             <td>{coin.market_cap_rank}</td>
             <td>{coin.name}</td>
             <td><img src={coin.image} alt={coin.id} className='table-image'/></td>
             <td>{numDifferentiation(coin.current_price)}</td>
             <td>{numDifferentiation(coin.price_change_percentage_24h)}%</td>
             <td>{numDifferentiation(coin.market_cap)}</td>
             <td><Link to= {`/coin/${coin.id}`} state={coin.id} className='table-link'>Get More Info</Link></td>
           </tr>;
  });

  console.log(mega)


  return (
    <div className='table'>
      <Nav />

      <div className='table-container'>
      <table cellPadding='0' cellSpacing='0'>
        <tr>
          <td><Button onClick={handlePrev}>Previous</Button></td>
          <td></td>
          <td></td>
          <td></td>
          <td><Button onClick={handleNext}>Next</Button></td>
          <td>Show</td>
          <td><Select defaultValue={10} value = {step} label='Ten' onChange={changeStep}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
            </Select></td>
        </tr>
        <tr className='table-head'>
          <th>Rank</th>
          <th>Name</th>
          <th>Image</th>
          <th>Current</th>
          <th>Price Change</th>
          <th>Market Cap</th>
          <th>link</th>
        </tr>
        {mega}
      </table>
      </div>
      <Footer />
    </div>
  )
}

export default Table