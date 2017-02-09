import { SEARCH } from "../actions/types";

const initState = {
  currAddress: "Paris, France",
  lat: "48.856614",
  lng: "2.3522219"
};


// able to fire
export default function search(state = initState, action = {}) {
  switch(action.type) {
    case SEARCH:
      console.log("--- search, reducer ----");
    
      return {
        currAddress: action.currAddress,
        lat: action.lat,
        lng: action.lng
      }

    default:
      return state;
  }
}

