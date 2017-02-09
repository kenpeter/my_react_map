import { CLICK_SINGLE_LOCATION } from "../actions/types";

const initState = {
  currAddress: ""
};


// able to fire
export default function clickSingleLocation(state = initState, action = {}) {
  switch(action.type) {
    case CLICK_SINGLE_LOCATION:
      return {
        currAddress: action.currAddress,
      }

    default:
      return state;
  }
}

