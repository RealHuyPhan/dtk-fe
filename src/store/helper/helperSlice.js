import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_FILTER_CREATOR = {
    page: 1,
    pageSize: 25,
}

const initialState = {
    loading: false,
    filterCreator: DEFAULT_FILTER_CREATOR,
    listCreator: [],
    pageCount: 0,
};

const helperSlice = createSlice({
    name: "hepler",
    initialState: initialState,
    reducers: {
        changeFilterCreator: (state, action) => {
            state.filterCreator = action.payload;
        },
        setListCreator: (state, action) => {
            state.listCreator = action.payload.meta.pagination.page === 1
                ? action.payload.data
                : [...state.listCreator, ...action.payload.data];
        },
        resetCreatorList: (state) => {
            state.filterCreator = DEFAULT_FILTER_CREATOR;
            state.totalCreator = 0;
        }
    },
});

export const {
    changeFilterCreator, setListCreator, resetCreatorList
} = helperSlice.actions;
export default helperSlice.reducer;