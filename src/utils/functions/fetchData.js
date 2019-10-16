import {Config} from '../config'
const { Api} = Config

  // FETCH FUNCTION -- HANDLE PAGINATION-SORT-NO MORE PRODUCT
  export const getData = async (page, limit, sort, setNoMoreProduct, setIsFetching, setListItems, setPage) => {
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
    return
  }