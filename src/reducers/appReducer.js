import ACTIONS from '../constants/actions';

const appReducer = (state = {
    searchQuery: '',
    envoyList: [],
    alphabet: [],
    currentEnvoy: {},
    currentEnvoyId: 0,
    nextEnvoyId: 0,
    prevEnvoyId: 0,
    structure: [],
    alphabetOrder: 'asc',
    bestForAnimals: [],
    worstForAnimals: []
}, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SEARCH_QUERY: 
            return {
                ...state,
                searchQuery: action.payload.query
            }
        case ACTIONS.GET_ENVOY_LIST:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS:
            return {
                ...state,
                alphabetOrder: action.payload.order
            }
        case ACTIONS.GET_ENVOY_LIST_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_BY_PARTY_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS_SUCCESS:
        case ACTIONS.GET_ENVOY_LIST_POSITIVE_SUCCESS:
        case ACTIONS.GET_QUERY_LIST_SUCCESS:
            return {
                ...state,
                envoyList: action.payload.list.envoyList,
                alphabet: action.payload.list.alphabet
            }
        case ACTIONS.GET_ENVOY_LIST_BY_PARTY:
        case ACTIONS.GET_ENVOY_LIST_BY_POINTS:
        case ACTIONS.GET_ENVOY_LIST_POSITIVE: 
        case ACTIONS.GET_QUERY_LIST_SUCCESS:
            return {
                ...state,
                alphabetOrder: 'asc'
            }
        case ACTIONS.GET_ENVOY:
            return {
                ...state,
                currentEnvoyId: action.payload.id
            }
        case ACTIONS.GET_ENVOY_SUCCESS:
            return {
                ...state,
                currentEnvoy: action.payload.envoy.length === 3 ? action.payload.envoy[1] : action.payload.envoy[0].id < state.currentEnvoyId ? action.payload.envoy[1] : action.payload.envoy[0],
                prevEnvoyId: action.payload.envoy.length === 3 ? action.payload.envoy[0].id : action.payload.envoy[0].id < state.currentEnvoyId ? action.payload.envoy[0].id : 0,
                nextEnvoyId: action.payload.envoy.length === 3 ? action.payload.envoy[2].id : state.currentEnvoyId < action.payload.envoy[1].id ? action.payload.envoy[1].id : 0
            }
        case ACTIONS.GET_STRUCTURE_SUCCESS:
            return {
                ...state,
                structure: action.payload.structure
            }
        case ACTIONS.GET_BEST_FOR_ANIMALS_SUCCESS:
            return {
                ...state,
                bestForAnimals: action.payload.list
            }
        case ACTIONS.GET_WORST_FOR_ANIMALS_SUCCESS:
            return {
                ...state,
                worstForAnimals: action.payload.list
            }
        default:
            return state;
    }
}


export default appReducer;