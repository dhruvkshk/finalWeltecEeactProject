 import { createSlice } from "@reduxjs/toolkit";

 
 const initialState = []
 
 const itemsSlice = createSlice ({
    name: 'items',
    initialState,
    reducers: {
        addInitailItmes: (state, action) => {
          return action.payload;
        }
    },
 });

 

 export  const itemsActions = itemsSlice.actions;


 export default itemsSlice;



