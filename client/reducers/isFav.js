import { IS_FAV } from "../actions/types";
import isAddressInFavLocalStorage from "../utils/isAddressInFavLocalStorage";

const initState = {
  currAddress: "Paris, France",
  isFav: isAddressInFavLocalStorage("Paris, France")
};


// able to fire
export default function isFav(state = initState, action = {}) {
  switch(action.type) {
    case IS_FAV:
    
      //test
      //console.log("---- in export default function isFav ----");
      //console.log(action);
      
      return {
        currAddress: action.currAddress,
        isFav: action.isFav
      }

    default:
      return state;
  }
}

