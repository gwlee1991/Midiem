import * as APIUtil from '../util/post_api_util';

export const RECEIVE_CURRENT_POST = "RECEIVE_CURRENT_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
// sync
export const receivePost = currentPost => ({
    type: RECEIVE_CURRENT_POST,
    currentPost
});

export const receivePosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

// async

export const fetchPost = id => dispatch => (
    APIUtil.fetchPost(id).then(post => (
        dispatch(receivePost(post))
    ))
);

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts().then(posts => (
        dispatch(receivePosts(posts))
    ))
);

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post => {
        dispatch(receivePost(post))
        return post;
    })
);

export const updatePost = post => dispatch => (
    APIUtil.updatePost(post).then(post => (
        dispatch(receivePost(post))
    ))
);

export const destroyPost = id => dispatch => (
    APIUtil.destroyPost(id).then(() => (
        dispatch(receivePost(null))
    ))
);
