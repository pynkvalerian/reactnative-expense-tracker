import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../redux/expenseSlice';

export default configureStore({
  reducer: {
    expenses: expenseReducer,
  }
})
