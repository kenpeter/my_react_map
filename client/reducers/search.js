import { SEARCH } from "../actions/types";

const initState = {
  currAddress: "",
  lat: "",
  lng: ""
};


// able to fire
export default function search(state = initState, action = {}) {
  switch(action.type) {
    case SEARCH:
    
      action.search.then((obj) => {
        console.log("---- in export default function search -----");
        console.log(obj);
        
        // This will not call mapStateToProps in Map.js 
        return {
          currAddress: obj.currAddress,
          lat: obj.lat,
          lng: obj.lng
        }
        
      });
    
      // How do I return App's state here
      // .e.g. return {currAddress: xxxx, lat: xxxx, lng: xxxx}
    default:
      return state;
  }
}


/*
// able to fire
export default function search(state = initState, action = {}) {
  switch(action.type) {
    case SEARCH:
    
      let currAddress;
      let lat;
      let lng;
      
      action.search.then((obj) => {
        currAddress = obj.currAddress;
        lat = obj.lat;
        lng = obj.lng;
      });
    
      return {
        currAddress: currAddress,
        lat: lat,
        lng: lng
      }
      
    default:
      return state;
  }
}
*/

