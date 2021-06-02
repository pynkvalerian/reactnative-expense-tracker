import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash';
import { ItemType } from '../types';

const calcStats = (list: ItemType[]) => {
  return {
    balance: _.reduce(list, (sum, item) => {
      return item.type === 'income'
        ? (sum += item.amount)
        : (sum -= item.amount)
    }, 0),
    income: _.reduce(list, (sum, item) => {
      return item.type === 'income'
        ? (sum += item.amount)
        : sum
    }, 0),
    expenses: _.reduce(list, (sum, item) => {
      return item.type === 'expenses'
        ? (sum += item.amount)
        : sum
      }, 0),
  }
};

interface ExpenseState {
  list: ItemType[],
  stats: {
    balance: number;
    income: number;
    expenses: number;
  }
};

const initialState: ExpenseState = {
  list: [],
  stats: {
    balance: 0,
    income: 0,
    expenses: 0,
  },
};

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addItem: (newItem) => {
      console.log('newItem additem', newItem);
      return newItem
    },
    addSuccess: (state, action: PayloadAction<ItemType>) => {
      const newItem = {
        ...action.payload,
        id: state.list.length + 1
      }
      state.list.push(newItem);
      state.stats = calcStats(state.list);
    },
    updateItem: (newItem) => newItem,
    updateSuccess: (state, action: PayloadAction<ItemType>) => {
      const index = state.list.findIndex(item => item.id == action.payload.id);
      state.list[index] = action.payload;
      state.stats = calcStats(state.list);
    },
    deleteItem: (item) => item,
    deleteSuccess: (state, action: PayloadAction<ItemType>) => {
      _.remove(state.list, (item) => item.id === action.payload.id);
      state.stats = calcStats(state.list);
    },
    fetchExpenses: () => {},
    expensesCRUDFailed: () => {
      console.log('failedddddddddd')
    },
    setExpenses: (state, action: PayloadAction<ItemType[]>) => {
      const list = action.payload;
      state.stats = calcStats(list);
      state.list = list;
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
