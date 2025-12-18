import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
};

const helperSlice = createSlice({
    name: "voucher",
    initialState: initialState,
    reducers: {

    },
});

export const {
} = helperSlice.actions;
export default helperSlice.reducer;