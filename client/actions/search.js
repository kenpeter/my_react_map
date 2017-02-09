// the types.js has many constant.
import { SEARCH, IS_FAV, TOGGLE_FAV_LOCATION } from "./types";
import isAddressInFav from "../utils/isAddressInFav";

export function search(search) {

  // // https://www.youtube.com/watch?v=1QI-UE3-0PU
  return (dispatch, getState) => {
    GMaps.geocode({
      address: search,
      callback: function(results, status) {
        if (status !== 'OK') return;
        
        const { toggleFavLocation } = getState();
        
        let latlng = results[0].geometry.location;
        let lat = latlng.lat();
        let lng = latlng.lng();
        let currAddress = results[0].formatted_address;
        
        let favArr = toggleFavLocation.favArr;
        let index = isAddressInFav(favArr, currAddress);
        let isFav;
        if(index !== -1) {
          isFav = true;
        }
        else {
          isFav = false;
        }
        
        // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
        // here we dispatch the obj
        // Action and state don't have to match up.
        //dispatch({ type: SEARCH, search: obj });
        dispatch({
          type: SEARCH, 
          currAddress: currAddress,
          lat: lat,
          lng: lng,
          isFav: isFav  
        });
        
        
        // fav
        dispatch({
          type: IS_FAV,
          currAddress: currAddress,
          isFav: isFav  
        });
        
      }
    })
  
  };  
}



