import { TOGGLE_FAV_LOCATION } from "../actions/types";

const initState = {
  toggleFavLocation: ""
};


// able to fire
export default function toggleFavLocation(state = initState, action = {}) {

  switch(action.type) {
    case TOGGLE_FAV_LOCATION:
    
      //console.log("--- toggleFavLocation ---");
      //console.log(state);
    
      return {
        toggleFavLocation: action.toggleFavLocation
      }

    default:
      return state;
  }
}

