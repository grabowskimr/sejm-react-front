import ACTIONS from '../constants/actions';


export function updateSearchQuery(query) {
    return {
        type: ACTIONS.UPDATE_SEARCH_QUERY,
        payload: {query}
    }
}

export function getEnvoyList(order) {
    return {
        type: ACTIONS.GET_ENVOY_LIST,
        payload: {order}
    }
}

export function getEnvoyListPositive() {
    return {
        type: ACTIONS.GET_ENVOY_LIST_POSITIVE
    }
}

export function getEnvoyListByParty() {
    return {
        type: ACTIONS.GET_ENVOY_LIST_BY_PARTY
    }
}

export function getEnvoyListByPoints() {
    return {
        type: ACTIONS.GET_ENVOY_LIST_BY_POINTS
    }
}

export function getEnvoy(id) {
    return {
        type: ACTIONS.GET_ENVOY,
        payload: {id}
    }
}

export function getStructure() {
    return {
        type: ACTIONS.GET_STRUCTURE
    }
}

export function getQueryList(query) {
    return {
        type: ACTIONS.GET_QUERY_LIST,
        payload: {query}
    }
}