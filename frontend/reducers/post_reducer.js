import {RECEIVE_CURRENT_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const nullPost = {
    id: "",
    title: "",
    body: "",
    image_url: "",
    author: "",
    topic_id: "",
}

const PostReducer = (state = nullPost, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_POST:
            const currentPost = action.currentPost;
            return merge({}, state, currentPost);
        default:
            return state;
    }
}

export default PostReducer;