import {select, call, put, takeEvery } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';
import dbActions from '../actions/dbActions';

function* getEnvoyList() {
    const list = yield call(dbActions.getEnvoyList);
    yield put({type: ACTIONS.GET_ENVOY_LIST_SUCCESS, payload: {list}});
}

function* getEnvoyListPositive() {
    const list = yield call(dbActions.getEnvoyListOnlyPositive);
    yield put({type: ACTIONS.GET_ENVOY_LIST_POSITIVE_SUCCESS, payload: {list}});
}

function* getEnvoyListByParty() {
    const list = yield call(dbActions.getEnvoyListByParty);
    yield put({type: ACTIONS.GET_ENVOY_LIST_BY_PARTY_SUCCESS, payload: {list}});
}

function* getEnvoyListByPoints() {
    const list = yield call(dbActions.getEnvoyListByPoints);
    yield put({type: ACTIONS.GET_ENVOY_LIST_BY_POINTS_SUCCESS, payload: {list}});
}

function* getEnvoy(action) {
    const envoy = yield call(dbActions.getEnvoy, action.payload.id);
    yield put({type: ACTIONS.GET_ENVOY_SUCCESS, payload: {envoy}});
}

function* getStructure() {
    const structure = yield call(dbActions.getEnvoyStructure);
    yield put({type: ACTIONS.GET_STRUCTURE_SUCCESS, payload: {structure}});
}

function* getQueryList(action) {
    const list = yield call(dbActions.getQueryList, action.payload.query);
    yield put({type: ACTIONS.GET_QUERY_LIST_SUCCESS, payload: {list}});
}

function* sejmikSaga() {
    yield takeEvery(ACTIONS.GET_ENVOY_LIST, getEnvoyList);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_POSITIVE, getEnvoyListPositive);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_BY_PARTY, getEnvoyListByParty);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_BY_POINTS, getEnvoyListByPoints);
    yield takeEvery(ACTIONS.GET_ENVOY, getEnvoy);
    yield takeEvery(ACTIONS.GET_STRUCTURE, getStructure);
    yield takeEvery(ACTIONS.GET_QUERY_LIST, getQueryList);
}

export default sejmikSaga;