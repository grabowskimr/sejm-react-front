import ACTIONS from '../constants/actions';


export function updateSearchQuery(query) {
    return {
        type: ACTIONS.UPDATE_SEARCH_QUERY,
        payload: {query}
    }
}

export function getEnvoyList() {
    return {
        type: ACTIONS.GET_ENVOY_LIST
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