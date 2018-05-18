import ACTIONS from '../constants/actions';

const appReducer = (state = {
    searchQuery: '',
    envoyList: [],
    alphabet: [],
    currentEnvoy: {},
    nextEnvoyId: 0,
    prevEnvoyId: 0,
    structure: []
}, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SEARCH_QUERY: 
            return {
                ...state,
                searchQuery: action.payload.query
            }
        case ACTIONS.GET_ENVOY_LIST_SUCCESS:
            return {
                ...state,
                envoyList: action.payload.list.envoyList,
                alphabet: action.payload.list.alphabet
            }
        case ACTIONS.GET_ENVOY_SUCCESS:
            return {
                ...state,
                currentEnvoy: action.payload.envoy[1],
                prevEnvoyId: action.payload.envoy[0].id,
                nextEnvoyId: action.payload.envoy[2].id
            }
        case ACTIONS.GET_STRUCTURE_SUCCESS: 
        console.log(action.payload.structure);
            return {
                ...state,
                structure: action.payload.structure
            }
        default:
            return state;
    }
}


export default appReducer;