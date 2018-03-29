import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
    currentUser: null,
    errors: []
};

const SessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser;
            console.log(currentUser);
            return merge({}, nullUser, {currentUser});
        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, nullUser, {errors});
        case CLEAR_ERRORS:
            return Object.assign({}, state, { errors: [] });
        default:
            return state;
    }
};

export default SessionReducer;