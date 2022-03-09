import {
  FETCH_ALL_COUNTRIES_START,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_ERROR,
  AllCountriesActions
} from "../actions/allCountriesAction";
import {Country} from "../../types"

export type CountriesInitialStateType = {
  countriesData: Country[] 
  error: string 
  loading: boolean
}

const initialState: CountriesInitialStateType = {
  countriesData: [],
  error: '',
  loading: false,
};

const allCountriesReducer = (state = initialState, action: AllCountriesActions): CountriesInitialStateType => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        countriesData: action.payload,
        loading: false,
      };
    case FETCH_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default allCountriesReducer;
