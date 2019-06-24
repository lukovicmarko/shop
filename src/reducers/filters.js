import { SEARCH_PRODUCT } from '../actions/types';

const filterReducersDefaultState = {
    text: '',
    sortBy: '',
    price: ''
};


export default (state = filterReducersDefaultState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}