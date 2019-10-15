import React, { useState, useEffect  } from 'react';

import {Config} from '../../utils/config'
import Card from '../../customElements/Card/Card';
import Ad from '../../customElements/Ads/Ad';
import Loading from '../../customElements/Loading/Loading'

const { ShowAddAfter, Api} = Config

const List = ({sort}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [isFetching, setIsFetching] = useState(false);
  const [listItems, setListItems] = useState([])
  const [noMoreProduct, setNoMoreProduct] = useState(false)

  // FETCH FUNCTION -- HANDLE PAGINATION-SORT-NO MORE PRODUCT
  const getData = async (page, limit) => {
    const response = await fetch(`${Api}/products?_page=${page}&_limit=${limit}${sort}`);
    const res = await response.json()

    // NO MORE PRODUCT
    if(res.length === 0) {
      setNoMoreProduct(true)
      setIsFetching(false)
      return
    }

    setListItems(prevListItems => ([
          ...prevListItems,
          ...res
        ]))
    setPage(prevPage => prevPage + 1)
    setIsFetching(false)
  }

  // DETECT SCROLLING
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIRST FETCH PRODUCTS
  useEffect(() => {
    setIsFetching(true);
  }, []);

  // RUN FETCH IN SCROLL AND OTHER SISUATIONS
  useEffect(() => {
   if (!isFetching) return;
   if(noMoreProduct) return
    getData(page, limit);
  }, [isFetching]);

  // RUN IF SORT IS SELECTED
  useEffect(() => {
    if(sort !== '') {
      setPage(1)
      setListItems([])
      setNoMoreProduct(false)
      setIsFetching(true)
      getData()
    }
  }, [sort])

  // HANDLE FETCH MORE PRODUCTS WHILE SCROLLING
  function handleScroll() {
    const windowHeight = window.innerHeight
    ? window.innerHeight
    : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  const windowBottom = Math.round(windowHeight + window.pageYOffset);

    //  WE CAN USE THIS LINE FOR WHEN EVER USER SCROLL THE {80%} OF SCREEN
  if (windowBottom >= (docHeight * 0.8)) {
    if(!noMoreProduct) {
      setIsFetching(true);
    }
   }
  }  
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
      {/* RENDER ADS AND PRODUCTS */}
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