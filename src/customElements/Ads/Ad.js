import React, {useState, useEffect} from "react";

import {Config} from '../../utils/config'
const { Api} = Config

const Ad = ({id}) => {

    const [uniqueNumber, setUniqueNumber] = useState([])
  // GENERATE UNIQUE NUMBER
    function IDGenerator() {
      // WE CAN CHOISE HOW MANY NUMBER WE WANT
        const length = 3;
        const timestamp = +new Date();
        
        const _getRandomInt = function( min, max ) {
           return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
        }
        
            const ts = timestamp.toString();
            const parts = ts.split( "" ).reverse();
            let id = "";
            
            for( let i = 0; i < length; ++i ) {
                const index = _getRandomInt( 0, parts.length - 1 );
               id += parts[index];	 
            }
            
            setUniqueNumber(id);
    }
      // AUTO GENERATE NUMBER WHEN AD WANT TO RENDER
      useEffect(() => {
        IDGenerator()
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
