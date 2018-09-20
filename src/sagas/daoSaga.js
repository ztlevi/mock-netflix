import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchDataFailed, fetchDataSuccess } from '../actions';

function* fetchData(action) {
  try {
    let res = yield call(fetch, action.payload.link);
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
