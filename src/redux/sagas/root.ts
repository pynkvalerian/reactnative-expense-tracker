import { all } from 'redux-saga/effects';
import {
  watchFetchExpenses,
  watchUpdateExpense,
  watchAddExpense,
  watchDeleteExpense,
} from './expense';

export default function* rootSaga() {
  yield all([
    watchFetchExpenses(),
    watchUpdateExpense(),
    watchAddExpense(),
    watchDeleteExpense(),
  ])
};
