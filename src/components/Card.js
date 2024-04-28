import React from 'react'
import Carousel from './Carousel';
import { PiShareFat } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";


const Card = ({ card }) => {
  let images = []
  card.land_media.forEach(element => {
    let obj = {
      image: element.image,
      category: element.category
    }
    images.push(obj)
  });

  console.log(images)
  let acres = card.total_land_size_in_acres?.acres != 0 ? `${card.total_land_size_in_acres.acres} Acres` : ''
  let guntas = card.total_land_size_in_acres?.guntas != 0 ? `${card.total_land_size_in_acres.guntas} Guntas` : ''

  let cror_acre = card.price_per_acre_crore?.crore || 0
  let lakh_acre = card.price_per_acre_crore?.lakh

  let acer_price = cror_acre != 0 ? `${cror_acre}.${lakh_acre} Crores per acer` : `${lakh_acre} Lakhs per acer`

  let total_price = card.total_price
  let divs = Math.floor(total_price) / 100
  const formatDecimal = (number) => {
    if (Number.isInteger(number)) {
      return number.toString();
    } else {
      return number.toFixed(1);
    }
  }
  let totalPrice = total_price > 99 ? `${formatDecimal(divs)}Crores for full property` : `${formatDecimal(total_price)}Lakhs for full property`


  let price = acres ? acer_price : totalPrice
  return (
    <div className="card-container">
      <div className='top-icon'>
        <div><PiShareFat /></div>
        <div><FaRegHeart /></div>
      </div>
      <div className='images'>
        <Carousel images={images} />
      </div>
      <div className='bottom'>
        <span><b>{card.village_name},{card.mandal_name}</b></span> <br />
        <span><b>{card.district_name}(dt)</b></span>

        <p><span><b>{`${acres}  ${guntas}`}.</b></span>{price} </p></div>
    </div>
  )
}

export default Card