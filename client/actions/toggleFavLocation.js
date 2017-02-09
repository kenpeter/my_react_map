import { TOGGLE_FAV_LOCATION, IS_FAV } from "./types";
import isAddressInFav from "../utils/isAddressInFav";


export function toggleFavLocation(currAddress, lat, lng) {

  // https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
  return (dispatch, getState) => {

    // get currAddr and addrArr
    const { toggleFavLocation } = getState();

    // is fav
    let isFav;

    // fav array
    let favArr = toggleFavLocation.favArr;
    // is it in state.
    let index = isAddressInFav(favArr, currAddress);
    let timenow = Date.now();
    let newArr = [];

    if(index !== -1) {
      // found, remove
      isFav = false;

      // because any obj in javascript is ref
      // if change ref obj, individual data within state cannot be touched.
      // https://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
      newArr = [
        ...favArr.slice(0, index),
        ...favArr.slice(index + 1)
      ];

      dispatch({
        type: TOGGLE_FAV_LOCATION,
        currAddress: currAddress,
        favArr: newArr
      });

      // store
      localStorage.favArr = JSON.stringify(newArr);
    }
    else {
      // not there, add
      isFav = true;

      // https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux
      // currAddr and addr array
      newArr = [...favArr, {
        address: currAddress,
        timestamp: Date.now(),
        lat: lat,
        lng: lng
      }];

      dispatch({
        type: TOGGLE_FAV_LOCATION,
        currAddress: currAddress,
        favArr: newArr
      });

      // store
      localStorage.favArr = JSON.stringify(newArr);
    }

    // the star
    dispatch({
      type: IS_FAV,
      currAddress: currAddress,
      isFav: isFav
    });

  };
}
