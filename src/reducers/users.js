import { FETCH_USERS } from '../actions/types';

const initalState = {
    users: []
};

export default (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}