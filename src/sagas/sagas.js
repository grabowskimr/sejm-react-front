import {select, call, put, takeLatest } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';

// function* getEnvoyStructure() {
//     const structure = yield call(dbActions.getEnvoyStructure);
//     yield put({type: ACTIONS.GET_ENVOY_STRUCTURE_SUCCESS, payload: {structure}});
// }

function* sejmikSaga() {
    // yield takeLatest(ACTIONS.GET_ENVOY_STRUCTURE, getEnvoyStructure);
}

export default sejmikSaga;