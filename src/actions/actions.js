import ACTIONS from '../constants/actions';


export function updateSearchQuery(query) {
    return {
        type: ACTIONS.UPDATE_SEARCH_QUERY,
        payload: {query}
    }
}

export function getEnvoyList(order, type) {
    return {
        type: ACTIONS.GET_ENVOY_LIST,
        payload: {order, type}
    }
}

export function getEnvoyListPositive(type) {
    return {
        type: ACTIONS.GET_ENVOY_LIST_POSITIVE,
        payload: {type}
    }
}

export function getEnvoyListByParty(type) {
    return {
        type: ACTIONS.GET_ENVOY_LIST_BY_PARTY,
        payload: {type}
    }
}

export function getEnvoyListByPoints(order, type) {
    return {
        type: ACTIONS.GET_ENVOY_LIST_BY_POINTS,
        payload: {order, type}
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

export function getBestForAnimals() {
    return {
        type: ACTIONS.GET_BEST_FOR_ANIMALS
    }
}

export function getWorstForAnimals() {
    return {
        type: ACTIONS.GET_WORST_FOR_ANIMALS
    }
}

export function getLocation() {
    return {
        type: ACTIONS.GET_LOCATION
    }
}

export function toggleMenu() {
    return {
        type: ACTIONS.TOGGLE_MENU
    }
}

export function getCountries() {
    return {
        type: ACTIONS.GET_COUNTRIES
    }
}

export function getEnvoyByCountry(location) {
    return {
        type: ACTIONS.GET_ENVOY_BY_COUNTRY,
        payload: {
            location
        }
    }
}

export function setAnswer(answer) {
    return {
        type: ACTIONS.SET_ANSWER,
        payload: {
            answer
        }
    }
}

export function sendAnswers(answers, id, points) {
    return {
        type: ACTIONS.SEND_ANSWERS,
        payload: {
            answers,
            id,
            points
        }
    }
}