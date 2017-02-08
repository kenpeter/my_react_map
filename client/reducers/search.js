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
    
      //test
      //console.log("---- in export default function search ----");
      //console.log(action);
    
      // we define the acton interface like this.
      return {
        currAddress: action.currAddress,
        lat: action.lat,
        lng: action.lng
      }

    default:
      return state;
  }
}

