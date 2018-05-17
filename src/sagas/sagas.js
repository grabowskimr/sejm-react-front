import {select, call, put, takeEvery } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';
import dbActions from '../actions/dbActions';

function* getEnvoyList() {
    const list = yield call(dbActions.getEnvoyList);
    yield put({type: ACTIONS.GET_ENVOY_LIST_SUCCESS, payload: {list}});
}

function* getEnvoy(action) {
    const envoy = yield call(dbActions.getEnvoy, action.payload.id);
    yield put({type: ACTIONS.GET_ENVOY_SUCCESS, payload: {envoy}});
}

function* sejmikSaga() {
    yield takeEvery(ACTIONS.GET_ENVOY_LIST, getEnvoyList);
    yield takeEvery(ACTIONS.GET_ENVOY, getEnvoy);
}

export default sejmikSaga;