import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice  = createSlice({
  name: 'items',
  initialState: {
    items: []
  },
  reducers: {
     addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    deleteItems: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, setItems, deleteItems } = itemsSlice.actions

export default itemsSlice.reducer
