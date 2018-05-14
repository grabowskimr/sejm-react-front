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