import { all } from 'redux-saga/effects';
import daoSaga from './daoSaga';

export default function* rootSaga() {
  yield all([...daoSaga]);
}
