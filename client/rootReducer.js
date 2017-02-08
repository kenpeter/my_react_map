import { combineReducers } from 'redux';
import search from "./reducers/search";
import toggleFavLocation from "./reducers/toggleFavLocation";
import isFav from "./reducers/isFav";

export default combineReducers({
  search,
  toggleFavLocation,
  isFav
});
 

