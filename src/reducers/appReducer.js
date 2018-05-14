import ACTIONS from '../constants/actions';

const appReducer = (state = {
    searchQuery: '',
    envoyList: [],
    alphabet: []
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
        default:
            return state;
    }
}


export default appReducer;