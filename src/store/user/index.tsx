import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "types/user";

export interface UserState {
  user: UserDetails | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
