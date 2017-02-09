import { TOGGLE_FAV_LOCATION, IS_FAV } from "./types";
import isAddressInFav from "../utils/isAddressInFav";


export function toggleFavLocation(currAddress, lat, lng) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {
     
    // get curr addr and addr arr
    const { toggleFavLocation } = getState();
    
    // add or remove from local storage
    let isFav;
    let favArr = toggleFavLocation.favArr;
    let index = isAddressInFav(favArr, currAddress);
    
    
    if(index !== -1) {
      // found, remove
      isFav = false;
      
      // https://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
      favArr.splice(index, 1); // found the index and remove that item
      localStorage.favArr = JSON.stringify(favArr);
      
      //console.log("-- remove --");
      //console.log(favArr);
    }
    else {
      // not there, add
      isFav = true;
      
      favArr.push({
        address: currAddress,
        timestamp: Date.now(),
        lat: lat,
        lng: lng
      });
      localStorage.favArr = JSON.stringify(favArr);
     
      //console.log("-- add --");
      //console.log(favArr);
    }
    
    
    //
    dispatch({ 
      type: TOGGLE_FAV_LOCATION, 
      currAddress: currAddress,
      favArr: favArr 
    });
    
    // the star
    dispatch({ 
      type: IS_FAV, 
      currAddress: currAddress,
      isFav: isFav
    });
    
    
  };
}
