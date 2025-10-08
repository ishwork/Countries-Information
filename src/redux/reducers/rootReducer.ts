import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import favouriteListReducer from "./favouriteListReducer";

const rootReducer = combineReducers({
  country: countryReducer,
  favCountries: favouriteListReducer,
});

export default rootReducer;
