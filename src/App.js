import React, {useState} from 'react';

import Filters from './components/Filters/Filters'
import List from './components/List/List'

const App = () => {

   const [sort, setSort] = useState('')

   function changeSort(sort) {
      setSort(sort)
   }

return (
 <>
    <Filters  changeSortFunc={changeSort}/>
    <List sort={sort} />
 </>
);
}
export default App;