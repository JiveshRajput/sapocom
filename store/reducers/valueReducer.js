const { createSlice } = require("@reduxjs/toolkit");

const toggleSlice = createSlice({
    name: 'value',
    initialState: {
        navbar: false,
        isLoading: false,
        contactUsModal: false,
        activeTab: 'Home',
    },
    reducers: {
        setNavbarValue(state, action) {
            state.navbar = action.payload;
        },
        setLoadingState(state, action) {
            state.isLoading = action.payload;
        },
        setContactUsModalState(state, action) {
            state.contactUsModal = action.payload;
        },
    }
})

export const getNavbarValue = (state) => state.value.navbar;
export const getLoadingState = (state) => state.value.isLoading;
export const getContactUsModalState = (state) => state.value.contactUsModal;

export const { setNavbarValue, setLoadingState, setContactUsModalState } = toggleSlice.actions;
export default toggleSlice.reducer;
