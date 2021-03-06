import React from "react";
import Loading from '../../customElements/Loading/Loading'
import "./styles.css";

import {convertDate} from '../../utils/functions/convertDate'
import {convertCenetToDollar} from '../../utils/functions//convertCentToDollar'

const Card = ({id, size, face, price, date, loading }) => {

  // CONVERT DATE WITH IMPORTED FUNCTION
  const convertedDate = convertDate(date)
  // CONVERT CENTS TO USD
  const dollars = convertCenetToDollar(price)

  // IF LOADING PROP PASS TO CARD THEN RENDER LOADING
  if(loading) {
    return <div className='card'>
            <Loading /> 
           </div>
              }

  // RENDER CARD
  return (
    <div className='card'>
        <div style={{fontSize:size,}}>{face}</div> 
      <div className='rows'>
        <div className='titles'>date: {convertedDate}</div>
        <div className='titles'>size: {size} pixels</div>
      </div>
      <div class='divider'></div>
      <div className='rows'>
        <div className='price'> {dollars}</div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
   
};

export default Card;
