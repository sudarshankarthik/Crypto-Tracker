import React from 'react'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import './file.css'

const Card = (props) => {

    return (
<div className='card'>
        <div className='top'>
        <img src={props.data[props.i].image} alt= {props.data[props.i].name} className='image-container'/>
      </div>
       
      <div className='bottom'>
          <h5>{props.data[props.i].name}</h5>
          <p>Rs {(props.data[props.i].current_price).toLocaleString()}</p>

        {props.data[props.i].price_change_percentage_24h < 0 ? (
          <span className='fall'>
            <FiArrowDown />
            {props.data[props.i].price_change_percentage_24h}
            </span>
          ) : (
            <span className='rise'>
            <FiArrowUpRight />
            {props.data[props.i].price_change_percentage_24h}
            </span>
          )}
        </div>
</div>
    )
}

export default Card;