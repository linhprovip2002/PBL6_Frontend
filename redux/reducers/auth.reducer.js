import { createSlice } from "@reduxjs/toolkit";
import { getToken, saveToken } from "@utils/LocalStorageHandle";
import { jwtDecode } from "jwt-decode";

// export type AuthState = {
//   loggedin: boolean;
//   user?: IUser;
//   credential?: ICredential;
//   fcmToken?: string;
// };
const getUserInfFromToken = (token) => {
  const { user } = jwtDecode(token);
  return {
    ...user?.account,
    roles: user?.Roles,
  };
};
const initialState = {
  loggedin: getToken() ? true : false,
  user: null,
  credential: getToken()
    ? {
        token: getToken(),
      }
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredential: (state, action) => {
      saveToken(action.payload.token);
      state.loggedin = true;
      state.credential = action.payload;
    },
    setUser: (state, action) => {
      const userInf = action.payload;
      // const userRoles = action.payload?.Roles;
      state.loggedin = true;
      state.user = { ...userInf };
    },
    logout: (state, action) => {
      state.loggedin = false;
      state.user = null;
      state.credential = null;
    },
  },
});

export const authSelector = (state) => state.auth;

export const { logout, setCredential, setUser } = authSlice.actions;
export default authSlice.reducer;
