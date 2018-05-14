import {select, call, put, takeEvery } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';
import dbActions from '../actions/dbActions';

function* getEnvoyList() {
    const list = yield call(dbActions.getEnvoyList);
    yield put({type: ACTIONS.GET_ENVOY_LIST_SUCCESS, payload: {list}});
}

function* sejmikSaga() {
    yield takeEvery(ACTIONS.GET_ENVOY_LIST, getEnvoyList);
}

export default sejmikSaga;