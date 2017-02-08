import { TOGGLE_FAV_LOCATION } from "../actions/types";
import favAddressInLocalStorage from "../utils/favAddressInLocalStorage";

const initState = {
  currAddress: "Paris, France",
  favArr: favAddressInLocalStorage()
};


// able to fire
export default function toggleFavLocation(state = initState, action = {}) {

  switch(action.type) {
    case TOGGLE_FAV_LOCATION:
    
      //console.log("--- toggleFavLocation ---");
      //console.log(action);
    
      return {
        currAddress: action.currAddress,
        favArr: action.favArr
      }

    default:
      return state;
  }
}

