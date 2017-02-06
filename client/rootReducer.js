import { combineReducers } from 'redux';
import search from "./reducers/search";
import toggleFavLocation from "./reducers/toggleFavLocation";


export default combineReducers({
  search,
  toggleFavLocation
});
 

