import {RECEIVE_CURRENT_POST, RECEIVE_POST_ERRORS, CLEAR_ERRORS} from '../actions/post_actions';
import merge from 'lodash/merge';

const nullPost = {
    id: "",
    title: "",
    body: "",
    image_url: "",
    author: "",
    topic_id: "",
    errors: []
}

const PostReducer = (state = nullPost, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_POST:
            const currentPost = action.currentPost;
            return merge({}, state, currentPost);
        case RECEIVE_POST_ERRORS:
            const errors = action.errors
            return merge({},state, {errors})
        case CLEAR_ERRORS:
            return Object.assign({}, state, {errors: []})
        default:
            return state;
    }
}

export default PostReducer;