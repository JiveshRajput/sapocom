const { createSlice } = require("@reduxjs/toolkit");

const toggleSlice = createSlice({
    name: 'value',
    initialState: {
        navbar: false,
        isLoading: false,
        activeTab: 'Home'
    },
    reducers: {
        setNavbarValue(state, action) {
            state.navbar = action.payload;
        },
        setLoadingState(state, action) {
            state.isLoading = action.payload;
        },
    }
})

export const getNavbarValue = (state) => state.value.navbar;
export const getLoadingState = (state) => state.value.isLoading;

export const { setNavbarValue, setLoadingState } = toggleSlice.actions;
export default toggleSlice.reducer;
