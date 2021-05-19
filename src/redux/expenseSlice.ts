import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';
import { ItemType } from '../types';

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    list: []
  },
  reducers: {
    addItem: (newItem) => newItem,
    addSuccess: (state, action) => {
      const newItem: ItemType = {
        id: state.list.length + 1,
        ...action.payload
      }
      state.list.push(newItem);
    },
    updateItem: (newItem) => newItem,
    updateSuccess: (state, action) => {
      const index = state.list.findIndex(item => item.id == action.payload.id);
      state.list[index] = action.payload;
    },
    deleteItem: (item) => item,
    deleteSuccess: (state, action) => {
      console.log('delete')
      _.remove(state.list, (item) => item.id === action.payload.id);
    },
    fetchExpenses: () => {},
    expensesCRUDFailed: () => {
      console.log('failedddddddddd')
    },
    setExpenses: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const {
  addItem,
  addSuccess,
  updateItem,
  updateSuccess,
  fetchExpenses,
  setExpenses,
  deleteItem,
  deleteSuccess,
  expensesCRUDFailed,
} = expenseSlice.actions;

export default expenseSlice.reducer;
