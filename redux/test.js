// import { configureStore } from "@reduxjs/toolkit";

// const reduxStore = configureStore({
//     reducer: {
//         key: key,
//     },
// })

// export default reduxStore

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../api";

// export const actionName= createAsyncThunk(
//     "actionName",
//     async (userData, { rejectWithValue, getState }) => {
//         try {
//         const { data } = await api.get("/apiEndPoint")
//      } catch (error) {
//             return rejectWithValue(error.message || "something went wrong")
//         }
//     })

// import { createSlice } from "@reduxjs/toolkit";

// const sliceName= createSlice({
//     name: "sliceName",
//     initialState: {},
//     reducers: {
//         invalidate: (state, { payload }) => {
//             payload.forEach(item => {
//                 state[item] = false
//             })
//         }
//     },
//     extraReducers: builder => builder
//         .addCase(actionName.pending, (state, { payload }) => {
//             state.loading = true
//         })
//         .addCase(actionName.fulfilled, (state, { payload }) => {
//             state.loading = false
//         })
//         .addCase(actionName.rejected, (state, { payload }) => {
//             state.loading = false
//             state.error = payload
//         })

// })

// export const { invalidate } = sliceName.actions
// export default sliceName.reducer
