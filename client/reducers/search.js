import { SEARCH } from "../actions/types";

const initState = {
  search: ""
};


// able to fire
export default function search(state = initState, action = {}) {
  switch(action.type) {
    case SEARCH:
      return {
        search: action.search
      }
      
    default:
      return state;
  }
}

