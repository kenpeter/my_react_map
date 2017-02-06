// the types.js has many constant.
import { SEARCH } from "./types";




/*
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
          let lat = latlng.lat();
          let lng = latlng.lng();
          let currAddress = results[0].formatted_address;
          
          let obj = {
            currAddress: currAddress,
            lat: lat,
            lng: lng
          }
          
          resolve(obj);
        }
      })
    })
  }
}
*/


export function search(search) {

  // // https://www.youtube.com/watch?v=1QI-UE3-0PU
  return (dispatch) => {
    GMaps.geocode({
      address: search,
      callback: function(results, status) {
        if (status !== 'OK') return;
        let latlng = results[0].geometry.location;
        let lat = latlng.lat();
        let lng = latlng.lng();
        let currAddress = results[0].formatted_address;
        
        let obj = {
          currAddress: currAddress,
          lat: lat,
          lng: lng
        }
        
        // here we dispatch the obj
        dispatch({ type: SEARCH, search: obj });
      }
    })
  
  };  
}



