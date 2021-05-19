import { call, takeLatest, takeEvery, put } from "redux-saga/effects";
import {
  setExpenses,
  fetchExpenses,
  expensesCRUDFailed,
  updateItem,
  updateSuccess,
  addItem,
  addSuccess,
  deleteItem,
  deleteSuccess
} from "../expenseSlice";
import { getExpensesApi } from '../../api/expenses';
import { ItemType } from '../../types';

interface ActionType {
  type: string;
  payload: ItemType;
}

function* handlefetchExpenses() {
  try {
    const result = yield call(getExpensesApi);
    const { list } = result.data;
    yield put(setExpenses(list));
  } catch (e) {
    yield put(expensesCRUDFailed());
  }
};

function* handleAddExpense(action: ActionType) {
  try {
    yield call(getExpensesApi);
    yield put (addSuccess({ ...action.payload }));
  } catch (e) {
    yield put(expensesCRUDFailed());
  }
}

function* handleUpdateExpense(action: ActionType) {
  try {
    yield call(getExpensesApi);
    yield put (updateSuccess({ ...action.payload }));
  } catch (e) {
    yield put(expensesCRUDFailed());
  }
}

function* handleDeleteExpense(action: ActionType) {
  try {
    yield call(getExpensesApi);
    yield put (deleteSuccess({ ...action.payload }));
  } catch (e) {
    yield put(expensesCRUDFailed());
  }
}

export function* watchFetchExpenses() {
  yield takeEvery(fetchExpenses.type, handlefetchExpenses);
};

export function* watchUpdateExpense() {
  yield takeLatest(updateItem.type, handleUpdateExpense);
};

export function* watchAddExpense() {
  yield takeLatest(addItem.type, handleAddExpense);
};

export function* watchDeleteExpense() {
  yield takeLatest(deleteItem.type, handleDeleteExpense);
};
