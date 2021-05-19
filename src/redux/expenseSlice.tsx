import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    list: [
      {
        id: '1',
        title: 'Lunch',
        amount: 10,
        createdAt: new Date('2021-05-01'),
        type: 'expenses'
      },
      {
        id: '2',
        title: 'Dinner',
        amount: 20,
        createdAt: new Date('2021-05-02'),
        type: 'expenses'
      },
      {
        id: '3',
        title: 'Groceries',
        amount: 356,
        createdAt: new Date('2021-05-03'),
        type: 'expenses'
      }
    ]
  },
  reducers: {
    addNew: (state, action) => {
      const newItem = {
        id: state.list.length + 1,
        ...action.payload
      }
      state.list.push(newItem);
    },
    updateItem: (state, action) => {
      const index = state.list.findIndex(item => item.id == action.payload.id);
      state.list[index] = action.payload;
    }
  }
});

export const { addNew, updateItem } = expenseSlice.actions;

export default expenseSlice.reducer;
