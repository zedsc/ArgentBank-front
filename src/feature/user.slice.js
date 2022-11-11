import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001/api/v1/user/";

// Get user datas
export const getUserInfos = createAsyncThunk(
  "user/getDatas",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "profile", "", token);
      console.log(response.data.body);
      return response?.data.body;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDatas: {},
    status: "idle",
    error: "false",
  },
  reducers: {
    // setUserDatas: (state, { payload }) => {
    //   state.userDatas = payload;
    // },
    // setIsAuth: (state, { payload }) => {
    //   state.isAuth = payload;
    // },
    setUserLogout: (state) => {
      state.userDatas = {};
      state.status = "idle";
      state.rror = "false";
    },
  },
  extraReducers: {
    [getUserInfos.pending]: (state) => {
      state.status = "loading";
    },
    [getUserInfos.fulfilled]: (state, { payload }) => {
      state.status = "succeded";
      state.userDatas = payload;
    },
    [getUserInfos.rejected]: (state, { payload }) => {
      state.status = "failed";
      state.error = payload.message;
    },
  },
});

export const { setUserDatas, setIsAuth, setUserLogout } = userSlice.actions;
export default userSlice.reducer;
