import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataFailed, fetchDataSuccess } from '../actions';

function* fetchData() {
  try {
    let res = yield call(fetch, 'data.json');
    let resBody = yield res.json();
    yield put(fetchDataSuccess(resBody));
  } catch (e) {
    yield put(fetchDataFailed(e));
  }
}

export default [takeEvery('FETCH_REQUESTED', fetchData)];
