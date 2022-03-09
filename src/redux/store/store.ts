import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Country } from "../../types";

//for integrating with Chrome's devtool extension to see the Redux states
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";

export type InititalState = {
  favCountries: {
    favouriteCountries: string[]
  }
  countries: {
  countriesData: Country[]
  error: string 
  loading: boolean
  }
  country: {
    countryData: Country[]
    loading: boolean
    error: string 
  },
}

const initialState: InititalState = {
  favCountries: { favouriteCountries: [] },
  countries: {
    countriesData: [],
    error: '',
    loading: false,
  },
  country: {
    countryData: [],
    loading: false,
    error: '',
  },
};

const storeHouse = () => {
  const favoriteList = localStorage.getItem("countries");
  //if there is favoritelist value in the localStorage, modify the initialState with this value
  if (favoriteList) {
    initialState.favCountries.favouriteCountries = JSON.parse(favoriteList);
  }

  //initialState is used to hydrate the store
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    const currentState = store.getState();
    const favoriteList = currentState.favCountries.favouriteCountries;
    localStorage.setItem("countries", JSON.stringify(favoriteList));
  });

  return store;
};
export default storeHouse;



