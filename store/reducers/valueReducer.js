const { createSlice } = require("@reduxjs/toolkit");

const toggleSlice = createSlice({
    name: 'value',
    initialState: {
        navbar: false,
        isLoading: false,
        contactUsModal: false,
        deleteModal: false,
        jobModal: false,
        modalId: 'default',
        modalType: 'default',
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
        setDeleteModalState(state, action) {
            state.deleteModal = action.payload;
        },
        setJobModalState(state, action) {
            state.jobModal = action.payload;
        },
        setModalId(state, action) {
            state.modalId = action.payload;
        },
        setModalType(state, action) {
            state.modalType = action.payload;
        },
    }
})

export const getNavbarValue = (state) => state.value.navbar;
export const getLoadingState = (state) => state.value.isLoading;
export const getContactUsModalState = (state) => state.value.contactUsModal;
export const getDeleteModalState = (state) => state.value.deleteModal;
export const getJobModalState = (state) => state.value.jobModal;
export const getModalId = (state) => state.value.modalId;
export const getModalType = (state) => state.value.modalType;

export const { setNavbarValue, setLoadingState, setContactUsModalState , setDeleteModalState , setJobModalState ,setModalId ,setModalType} = toggleSlice.actions;
export default toggleSlice.reducer;
