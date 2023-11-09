import { createSlice } from '@reduxjs/toolkit';

// export type AuthState = {
//   loggedin: boolean;
//   user?: IUser;
//   credential?: ICredential;
//   fcmToken?: string;
// };

const initialState = {
  loggedin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredential: (state, action) => {
      state.loggedin = true;
      state.credential = action.payload;
    },
    setUser: (state, action) => {
      state.loggedin = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.loggedin = false;
      state.user = undefined;
      state.credential = undefined;
    },
  },
});

export const authSelector = (state) => state.auth;

export const {logout, setCredential, setUser} = authSlice.actions;
export default authSlice.reducer;
