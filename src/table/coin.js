import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Footer from '../files/footer'
import Nav from '../files/nav'
import '../index.css'
import '../files/file.css'


const Coin = (props) => {

  const [isLoading, setLoading] = useState(true);
    const {id} = useParams()
    const [coin, setCoin] = useState({});
    console.log(id)
    const api = `https://api.coingecko.com/api/v3/coins/${id}`

    useEffect(() => {
        
        axios.get(api).then((response) => {
            setCoin(response.data)
        }).catch((error) => {
            console.log(error)
        })
        setLoading(false)
    }, [])



    if(coin.image == null) {
      return <div>loading...</div>
    }    

  return (
    <div className='coin'>
      <Nav />
      <div className='right-container'>
        <div className='image-container'>
        <img src={coin.image.large} alt={coin.name} width='10px'/>
        </div>
        <h2>{coin.name}</h2>
      </div>
      <div className='left-container'>
        right
      </div>
      <Footer />
    </div>
  )
}

export default Coin