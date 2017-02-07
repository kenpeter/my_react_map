import { TOGGLE_FAV_LOCATION } from "./types";


export function isAddressInFav(arr, address) {
  let index = -1;

  for(var i = 0; i < arr.length; i++){
    if(arr[i].address == address) {
      index = i;
      break;
    }
    else {
    
    }
  }

  return index; 
}


export function toggleFavLocation(currAddress) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {
     
    const { toggleFavLocation } = getState();
    
    // add or remove from local storage
    let isFav;
    let storeFavArr = toggleFavLocation.favArr;
    let index = isAddressInFav(storeFavArr, currAddress);
    
    
    if(index !== -1) {
      // found, remove
      isFav = false;
      // https://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
      storeFavArr.splice(index, 1); // found the index and remove that item
      
      
      console.log("-- remove --");
      console.log(storeFavArr);
    }
    else {
    
      // not there, add
      storeFavArr.push({
        address: currAddress,
        timestamp: Date.now()
      });
      
      isFav = true;
      
      console.log("-- add --");
      console.log(storeFavArr);
    }
    
    dispatch({ 
      type: TOGGLE_FAV_LOCATION, 
      currAddress: currAddress,
      isFav: isFav,
      favArr: storeFavArr 
    });
    
  };
}
