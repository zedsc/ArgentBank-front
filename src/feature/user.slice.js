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

// Update user datas
export const updateUserInfos = createAsyncThunk(
  "user/updateDatas",
  async (profileNames, { getState, rejectWithValue }) => {
    const token = getState().auth.userToken;
    const sendToken = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.put(
        BASE_URL + "profile",
        profileNames,
        sendToken
      );
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
    update: "idle",
  },
  reducers: {
    setUserLogout: (state) => {
      state.userDatas = {};
      state.status = "idle";
      state.error = "false";
      state.update = "idle";
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
    [updateUserInfos.pending]: (state) => {
      state.update = "loading";
    },
    [updateUserInfos.fulfilled]: (state, { payload }) => {
      state.update = "succeded";
      state.userDatas.firstName = payload.firstName;
      state.userDatas.lastName = payload.lastName;
    },
    [updateUserInfos.rejected]: (state, { payload }) => {
      state.update = "failed";
      state.updateError = payload.message;
    },
  },
});

export const { setUserLogout } = userSlice.actions;
export default userSlice.reducer;
