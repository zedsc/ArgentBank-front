import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001/api/v1/user/";

// const userToken = sessionStorage.getItem("token")
//   ? sessionStorage.getItem("token")
//   : null;

// Authentification - login
export const logIn = createAsyncThunk(
  "auth/login",
  async (loginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "login", loginCredentials);
      console.log(response.data.body.token);
      return response?.data.body.token;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    userToken: null,
    rememberMe: false,
    status: "idle",
    error: "false",
  },
  reducers: {
    setRememberMe: (state, { payload }) => {
      state.rememberMe = payload;
    },
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    setAuthLogout: (state) => {
      state.userToken = null;
      state.status = "idle";
      state.error = "false";
      sessionStorage.clear();
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "loading";
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.status = "succeded";
      state.userToken = payload;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.status = "failed";
      state.error = payload.message;
    },
  },
});

export const { setRememberMe, setUserName, setAuthLogout } = authSlice.actions;
export default authSlice.reducer;
