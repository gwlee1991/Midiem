import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

const nullPosts = {
    1: {
        title: "",
        body: "",
        author: {},
        image_url: "",
        topic_id: "",
    }
};

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