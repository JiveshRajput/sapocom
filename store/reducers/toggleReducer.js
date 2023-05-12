const { createSlice } = require("@reduxjs/toolkit");

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        navbar: false,
    },
    reducers: {
        setNavbarValue(state, action) {
            state.navbar = action.payload;
        },
    }
})

export const getNavbarValue = (state) => state.toggle.navbar;

export const { setNavbarValue } = toggleSlice.actions;
export default toggleSlice.reducer;
