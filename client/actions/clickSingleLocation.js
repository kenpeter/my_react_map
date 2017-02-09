// the types.js has many constant.
import { CLICK_SINGLE_LOCATION, SEARCH } from "./types";

export default function clickSingleLocation(currAddress, lat, lng) {

  // https://www.youtube.com/watch?v=1QI-UE3-0PU
  return (dispatch, getState) => {
    
    // single location list
    dispatch({ 
      type: CLICK_SINGLE_LOCATION, 
      currAddress: currAddress
    });
    
    // search
    dispatch({ 
      type: SEARCH,
      currAddress: currAddress,
      lat: lat,
      lng: lng
    });
   
  }
  
}



