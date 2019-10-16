export function IDGenerator() {
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
          
          return id;
  }