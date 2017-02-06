import { TOGGLE_FAV_LOCATION } from "./types";

export function toggleFavLocation(toggleFavLocation) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {
    
    // add or remove from local storage
    const { search } = getState();
    
    console.log("works?");
    console.log(search);
    
    
    dispatch({ 
      type: TOGGLE_FAV_LOCATION, 
      toggleFavLocation: toggleFavLocation 
    });
    
  };
}
