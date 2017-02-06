// the types.js has many constant.
import { SEARCH } from "./types";


/*
export function setSearch(search) {
  return { 
    type: SEARCH, 
    search: search
  }
}
*/

export function search(search) {
  
  return { 
    type: SEARCH,
    
    // wrap async call inside a promise
    search: new Promise((resolve, reject) => {
      GMaps.geocode({
        address: search,
        callback: function(results, status) {
          if (status !== 'OK') return;
          let latlng = results[0].geometry.location;
          let currAddress = results[0].formatted_address;
        
          console.log("---- in search(search) ----");
          console.log(currAddress);
        
          resolve(currAddress);
        }
      })
    })
  }
  
}  
