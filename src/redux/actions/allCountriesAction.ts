import { Dispatch } from "redux";

import {Country} from "../../types"

export const FETCH_ALL_COUNTRIES_START = "FETCH_ALL_COUNTRIES_START";
export const FETCH_ALL_COUNTRIES_SUCCESS = "FETCH_ALL_COUNTRIES_SUCCESS";
export const FETCH_ALL_COUNTRIES_ERROR = "FETCH_ALL_COUNTRIES_ERROR";


export function fetchAllCountriesStart(): CountriesActionStart {
  return {
    type: FETCH_ALL_COUNTRIES_START,
  };
}

export function fetchAllCountriesSuccess(payload: Country[]): CountriesActionSuccess {
  return {
    type: FETCH_ALL_COUNTRIES_SUCCESS,
    payload: payload,
  };
}

export function fetchAllCountriesError(payload: string): CountriesActionError {
  return {
    type: FETCH_ALL_COUNTRIES_ERROR,
    payload: payload,
  };
}

export const fetchAllCountriesAsMiddleWare = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchAllCountriesStart());
      const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages`);
      const data = await response.json();
      dispatch(fetchAllCountriesSuccess(data));
    } catch (error) {
      dispatch(fetchAllCountriesError(`${error}`));
    }
  };
};

//type for actions
export type CountriesActionStart = {
  type: typeof FETCH_ALL_COUNTRIES_START; 
}

export type CountriesActionSuccess = {
  type: typeof FETCH_ALL_COUNTRIES_SUCCESS;
  payload: Country[]
}

export type CountriesActionError = {
type: typeof FETCH_ALL_COUNTRIES_ERROR
payload: string 
}

export type AllCountriesActions = CountriesActionStart | CountriesActionSuccess | CountriesActionError
