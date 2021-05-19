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
        created_at: new Date('2021-05-01'),
        type: 'expenses'
      },
      {
        id: '2',
        title: 'Dinner',
        amount: 20,
        created_at: new Date('2021-05-02'),
        type: 'expenses'
      },
      {
        id: '3',
        title: 'Groceries',
        amount: 356,
        created_at: new Date('2021-05-03'),
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
    }
  }
});

export const showExpensesList = state => _.orderBy(state.expenses.list, ['created_at'], ['desc']);

export const { addNew } = expenseSlice.actions;

export default expenseSlice.reducer;
