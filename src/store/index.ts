import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import expenseReducer from '../redux/expenseSlice';
import createSagaMiddleware from 'redux-saga';
import saga from '../redux/sagas/root';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;
