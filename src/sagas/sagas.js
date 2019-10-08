import {select, call, put, takeEvery } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';
import dbActions from '../actions/dbActions';
import mapActions from '../utils/map';

function* getEnvoyList(action) {
    const list = yield call(dbActions.getEnvoyList, action.payload.type);
    yield put({type: ACTIONS.GET_ENVOY_LIST_SUCCESS, payload: {list}});
}

function* getSenatorList(action) {
    const list = yield call(dbActions.getEnvoyList, action.payload.type);
    yield put({type: ACTIONS.GET_SENATOR_LIST_SUCCESS, payload: {list}});
}

function* getMepsList(action) {
    const list = yield call(dbActions.getEnvoyList, action.payload.type);
    yield put({type: ACTIONS.GET_MEPS_LIST_SUCCESS, payload: {list}});
}

function* getEnvoyListPositive(action) {
    const list = yield call(dbActions.getEnvoyListOnlyPositive, action.payload.type);
    yield put({type: ACTIONS.GET_ENVOY_LIST_POSITIVE_SUCCESS, payload: {list}});
}

function* getEnvoyListByParty(action) {
    const list = yield call(dbActions.getEnvoyListByParty, action.payload.type);
    yield put({type: ACTIONS.GET_ENVOY_LIST_BY_PARTY_SUCCESS, payload: {list}});
}

function* getEnvoyListByPoints(action) {
    const list = yield call(dbActions.getEnvoyListByPoints, action.payload.type);
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

function* getBestForAnimals() {
    const list = yield call(dbActions.getBestForAnimals);
    yield put({type: ACTIONS.GET_BEST_FOR_ANIMALS_SUCCESS, payload: {list}});
}

function* getWorstForAnimals() {
    const list = yield call(dbActions.getWorstForAnimals);
    yield put({type: ACTIONS.GET_WORST_FOR_ANIMALS_SUCCESS, payload: {list}});
}

function* getCurrentLocation() {
    const location = yield call(mapActions.getLocalization);
    yield put({type: ACTIONS.GET_LOCATION_SUCCESS, payload: {location}});
}

function* getEnvoyListByPos(action) {
    const list = yield call(dbActions.getEnvoyListByPos, action.payload.location);
    yield put({type: ACTIONS.GET_ENVOY_LIST_BY_POS_SUCCESS, payload: {list}});
}

function* getCountries() {
    const countries = yield call(dbActions.getCountries);
    yield put({type: ACTIONS.GET_COUNTRIES_SUCCESS, payload: {countries}});
}

function* sendAnswers(action) {
    const message = yield call(dbActions.sendAnswers, action.payload.answers, action.payload.id, action.payload.points);
    yield put({type: ACTIONS.SEND_ANSWERS_SUCCESS, payload: {message}});
}

function* sejmikSaga() {
    yield takeEvery(ACTIONS.GET_ENVOY_LIST, getEnvoyList);
    yield takeEvery(ACTIONS.GET_SENATOR_LIST, getSenatorList);
    yield takeEvery(ACTIONS.GET_MEPS_LIST, getMepsList);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_POSITIVE, getEnvoyListPositive);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_BY_PARTY, getEnvoyListByParty);
    yield takeEvery(ACTIONS.GET_ENVOY_LIST_BY_POINTS, getEnvoyListByPoints);
    yield takeEvery(ACTIONS.GET_ENVOY, getEnvoy);
    yield takeEvery(ACTIONS.GET_STRUCTURE, getStructure);
    yield takeEvery(ACTIONS.GET_QUERY_LIST, getQueryList);
    yield takeEvery(ACTIONS.GET_BEST_FOR_ANIMALS, getBestForAnimals);
    yield takeEvery(ACTIONS.GET_WORST_FOR_ANIMALS, getWorstForAnimals);
    yield takeEvery(ACTIONS.GET_LOCATION, getCurrentLocation);
    yield takeEvery(ACTIONS.GET_LOCATION_SUCCESS, getEnvoyListByPos);
    yield takeEvery(ACTIONS.GET_COUNTRIES, getCountries);
    yield takeEvery(ACTIONS.GET_ENVOY_BY_COUNTRY, getEnvoyListByPos);
    yield takeEvery(ACTIONS.SEND_ANSWERS, sendAnswers);
}

export default sejmikSaga;