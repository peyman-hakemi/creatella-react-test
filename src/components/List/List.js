import React, { useState, useEffect  } from 'react';

import {Config} from '../../utils/config'
import {getData} from '../../utils/functions/fetchData'
import {handleScroll} from '../../utils/functions/fetchOnScroll'
import Card from '../../customElements/Card/Card';
import Ad from '../../customElements/Ads/Ad';
import Loading from '../../customElements/Loading/Loading'

const { ShowAddAfter } = Config

const List = ({sort}) => {
  // initial the states
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [isFetching, setIsFetching] = useState(false);
  const [listItems, setListItems] = useState([])
  const [noMoreProduct, setNoMoreProduct] = useState(false)

  // DETECT SCROLLING
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(noMoreProduct, setIsFetching));
    return () => window.removeEventListener('scroll', () => handleScroll(noMoreProduct, setIsFetching));
  }, []);

  // FIRST FETCH PRODUCTS
  useEffect(() => {
    setIsFetching(true);
  }, []);

  // RUN FETCH IN SCROLL AND OTHER SISUATIONS that isfetching change to true
  useEffect(() => {
   if (!isFetching) return;
   if(noMoreProduct) return
   getData(page, limit, sort, setNoMoreProduct, setIsFetching, setListItems, setPage)
  }, [isFetching]);

  // RUN IF SORT IS SELECTED
  useEffect(() => {
    if(sort !== '') {
      if (isFetching) return;
      setPage(1)
      setListItems([])
      setNoMoreProduct(false)
      setIsFetching(true)
    }
  }, [sort])


  // RENDER LOADING WHILE FETCH THE PRODUCTS
  if (listItems.length === 0) return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      height:'100vh'
    }}>
    <Loading />
    </div>
  )
  
  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center'
    }}>

      {/* RENDER ADS or PRODUCTS */}
        {listItems.map(({ id, size, face, price, date }, index) => 
             index && index % ShowAddAfter === 0 
             ?
             <Ad id />
             :
             <Card id={id} size={size} face={face} price={price} date={date} key={index}/>
        )}

  {/* RENDER NO MORE PRODUCT */}
  {noMoreProduct && <div style={{
    backgroundColor:'white',
    height:150,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  }}>There Is No More Product To Show</div>}
  
  {/* RENDER LOADING - LOAD MORE */}
  {isFetching && !noMoreProduct && <Card loading={true} />}
    </ div>
  );
};

export default List;