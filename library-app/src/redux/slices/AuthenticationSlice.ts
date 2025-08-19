import {
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  
  import { type LoginUserPayload, type User } from "../../models/User";
  import axios from "axios";
  
  interface AuthenticationSliceState {
    displayLogin: boolean;
    loggedInUser: User | undefined;
    loading: boolean;
    error: boolean;
    registerSuccess: boolean;
  }
  
  const initialState: AuthenticationSliceState = {
    displayLogin: true,
    loggedInUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false,
  };
  
  export const loginUser = createAsyncThunk(
    "auth/login",
    async (user: LoginUserPayload, thunkAPI) => {
      try {
        const req = await axios.post("http://localhost:8000/auth/login", user);
        return req.data.user;
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  
  export const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //Pending logic
      builder.addCase(loginUser.pending, (state) => {
        state = {
          ...state,
          error: false,
          loading: true,
        };
        return state;
      });
      //Resolved logic
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state = {
          ...state,
          loading: false,
          loggedInUser: action.payload,
        };
        return state;
      });
      
     //Rejected logic
      builder.addCase(loginUser.rejected, (state) => {
     state = {
      ...state,
      error:true,
      loading: false,
     }
     return state;
  
  
  
      });
    },
  });
  
  export const {} = AuthenticationSlice.actions;
  
  export default AuthenticationSlice.reducer;