export function convertCenetToDollar(price ) {
    let dollars = price / 100;
   return dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}