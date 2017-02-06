// the types.js has many constant.
import { SEARCH } from "./types";

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
        
        /*
        let obj = {
          currAddress: currAddress,
          lat: lat,
          lng: lng
        }
        */
        
        // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
        // here we dispatch the obj
        // Action and state don't have to match up.
        //dispatch({ type: SEARCH, search: obj });
        dispatch({
          type: SEARCH, 
          currAddress: currAddress,
          lat: lat,
          lng: lng    
        });
      }
    })
  
  };  
}



