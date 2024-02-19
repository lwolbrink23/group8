import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredential) => {
    localStorage.setItem("user", JSON.stringify(userCredential));
    return userCredential;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    //userData: null,
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log("Error logging in:", action.error);
        if (action.error.message === "Request failed with status code 401") {
          state.error =
            "Access denied. Please check your email and password and try again.";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
