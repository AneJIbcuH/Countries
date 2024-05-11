import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "../models/models";

interface CountriesState {
  favorites: ICountry[];
}

const initialState: CountriesState = {
  favorites: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<ICountry>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<ICountry>) {
      state.favorites = state.favorites.filter(
        (country) => country.name.common !== action.payload.name.common
      );
    },
  },
});

export const countriesActions = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
