  // HANDLE FETCH MORE PRODUCTS WHILE SCROLLING
  export function handleScroll(noMoreProduct, setIsFetching) {
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