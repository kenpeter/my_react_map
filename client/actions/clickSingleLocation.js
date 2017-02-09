// the types.js has many constant.
import { CLICK_SINGLE_LOCATION, SEARCH } from "./types";

export default function clickSingleLocation(currAddress, lat, lng) {

  // https://www.youtube.com/watch?v=1QI-UE3-0PU
  return (dispatch, getState) => {
    
    //test
    //console.log("---- clickSingleLocation ----");
    //console.log(currAddress);
    //console.log(lat);
    //console.log(lng);
    
    // search, map, list location re-render
    // single location gets re-render as well, because the parent ListLocation gets re-render.
    dispatch({ 
      type: SEARCH, 
      currAddress: currAddress,
      lat: lat,
      lng: lng
    });
 
    
  }
  
}



