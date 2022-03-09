import { combineReducers } from "redux";

import allCountriesReducer from "./allCountriesReducer";
import countryReducer from "./countryReducer";
import favouriteListReducer from "./favouriteListReducer";

const rootReducer = combineReducers({
  countries: allCountriesReducer,
  country: countryReducer,
  favCountries: favouriteListReducer,
});

export default rootReducer;
