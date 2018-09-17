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

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData);
}
export default [watchFetchData()];
