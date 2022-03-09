export const ADD_FAVORITE = "ADD_FAVOURITE";
export const REMOVE_FAVORITE = "REMOVE_FAVOURITE";

export const addFavorite = (countryName: string): AddFavoriteAction => {
  return {
    type: ADD_FAVORITE,
    payload: countryName,
  };
};
export const removeFavorite = (countryName: string): RemoveFavoriteAction => {
  return {
    type: REMOVE_FAVORITE,
    payload: countryName,
  };
};

type AddFavoriteAction = {
  type: typeof ADD_FAVORITE
  payload: string
}

type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE
  payload: string
}

export type Actions = AddFavoriteAction | RemoveFavoriteAction
