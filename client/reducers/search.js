import { SEARCH } from "../actions/types";

/*
const initState = {
  search: {
    currAddress: "",
    lat: "",
    lng: ""
  }  
};
*/

const initState = {
  currAddress: "",
  lat: "",
  lng: "" 
};


// able to fire
export default function search(state = initState, action = {}) {
  switch(action.type) {
    case SEARCH:
    
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

