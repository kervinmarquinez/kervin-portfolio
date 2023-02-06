import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
       status: true,
       modal: null,
   },
   reducers: {
       changeLanguage: (state) => {
             if (state.status) {
                state.status = false
             } else {
                state.status = true
             }
       },
       toggleModal: (state, {payload}) => {
         if(!state.modal) {
            state.modal = payload;
         } else {
            state.modal = null;
         }
   },
   }
});

// Action creators are generated for each case reducer function
export const { changeLanguage, toggleModal } = uiSlice.actions;