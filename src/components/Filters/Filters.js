import React, {useState, useEffect} from 'react';
import Headroom from 'react-headroom'

import './styles.css'

const Filters = ({changeSortFunc}) => {

    const [sort, setSort] = useState('')
    // IF SORT SELECTED THEN PASS IT TO PARENT
    useEffect(() => {
        changeSortFunc(sort)
    }, [sort])

return (
    <Headroom
    wrapperStyle={{ marginBottom: 5 }}
    style={{
      background: 'rgb(57, 111, 176)',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
      paddingLeft:25
    }}
  >
      <div className='container'>
          <div style={{display:'inline-block'}}>Sort By : </div>

          <div className={sort === '&_sort=id' ? 'filters active' : 'filters'} onClick={() => setSort('&_sort=id')} >ID </div>

          <div className={sort === '&_sort=price' ? 'filters active' : 'filters'} onClick={() => setSort('&_sort=price')}>Price</div>
          
          <div className={sort === '&_sort=size' ? 'filters active' : 'filters'} onClick={() => setSort('&_sort=size')}>Size</div>
      </div>
    </ Headroom>
)
}

export default Filters;