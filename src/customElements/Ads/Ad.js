import React, {useState, useEffect} from "react";

import {Config} from '../../utils/config'
import {IDGenerator} from '../../utils/functions/genrateUniqueNumber'
const { Api} = Config

const Ad = ({id}) => {

    const [uniqueNumber, setUniqueNumber] = useState([])
    
      // AUTO GENERATE NUMBER WHEN AD WANT TO RENDER
      useEffect(() => {
       setUniqueNumber(IDGenerator()) 
      },[])
      

  return (
      <div style={{
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        minWidth: 270,
        cursor: 'pointer',
        marginTop:'auto',
        marginBottom: 'auto',
        marginRight:'1rem',
        marginLeft:'1rem'
      }}>

    <img src={`${Api}/ads/?r=${uniqueNumber}`}
            alt={`/ads/?r=${uniqueNumber}`} style={{width:'100%',height:null}}/>
      </div>

  )
   
};

export default Ad;
