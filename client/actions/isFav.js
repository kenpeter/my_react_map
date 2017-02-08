import { IS_FAV } from "./types";
import isAddressInFav from "../utils/isAddressInFav";


export function isFav(currAddress) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {
     
    const { toggleFavLocation } = getState();
    
    // add or remove from local storage
    let favArr = toggleFavLocation.favArr;
    let isFav;
    let index = isAddressInFav(favArr, currAddress);
    
    
    if(index !== -1) {
      // found, remove
      isFav = false;
    }
    else {
      // not there, add
      isFav = true;
    }
    
    // https://github.com/reactjs/redux/issues/1676
    console.log("---- in isFav ----");
    console.log(isFav);
    
    dispatch({ 
      type: IS_FAV, 
      currAddress: currAddress,
      isFav: isFav
    });
    
  };
}
