import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "types/user";

export interface UserState {
  user: UserDetails | null;
  favoriteArticles: string[];
}

const initialState: UserState = {
  user: null,
  favoriteArticles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.favoriteArticles = [];
      state.user = null;
    },
    setFavoriteArticles: (state, action: PayloadAction<string[]>) => {
      state.favoriteArticles = action.payload;
    },
    clearFavoriteArticles: state => {
      state.favoriteArticles = [];
    },
  },
});

export const { setUser, setFavoriteArticles, clearFavoriteArticles, clearUser } = userSlice.actions;

export default userSlice.reducer;
