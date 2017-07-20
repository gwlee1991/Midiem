import { RECEIVE_ALL_POSTS } from '../actions/topic_actions';
import merge from 'lodash/merge';

const nullPosts = {
    null: {}
}

const PostsReducer = (state = nullPosts, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            const posts = action.posts;
            return merge({}, state, posts);
        default:
            return state;
    }
}

export default PostsReducer;