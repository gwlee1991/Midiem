import * as APIUtil from '../util/post_api_util';
import * as LikeAPIUtil from '../util/like_api_util';
import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_CURRENT_POST = "RECEIVE_CURRENT_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_STATE = "CLEAR_STATE";

// sync
export const receivePost = currentPost => ({
    type: RECEIVE_CURRENT_POST,
    currentPost
});

export const receivePosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const deletePost = id => ({
    type: DELETE_POST,
    id
});

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const clearState = () => ({
    type: CLEAR_STATE
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})
// async


export const fetchPost = id => dispatch => (
    APIUtil.fetchPost(id).then(post => (
        dispatch(receivePost(post))
    ), err => dispatch(receivePostErrors(err.responseJSON)))
);

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts().then(posts => (
        dispatch(receivePosts(posts))
    ), err => dispatch(receivePostErrors(err.responseJSON)))
);

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post => {
        dispatch(receivePost(post));
        dispatch(clearErrors());
        return post;
    }, err => (
        dispatch(receivePostErrors(err.responseJSON))
    ))
);

export const updatePost = post => dispatch => (
    APIUtil.updatePost(post).then(post => {
        dispatch(receivePost(post));
        dispatch(clearErrors());
     }, err => (
            dispatch(receivePostErrors(err.responseJSON))
    ))
);

export const destroyPost = id => dispatch => (
    APIUtil.destroyPost(id).then(() => dispatch(deletePost(id))).then(() => (
        dispatch(receivePost(null))
    ))
);

export const fetchLikedPosts = id => dispatch => (
    APIUtil.fetchLikedPosts(id).then(posts=> dispatch(receivePosts(posts)))
);

export const createLike = like => dispatch => (
    LikeAPIUtil.createLike(like).then(post => dispatch(receivePost(post)))
);

export const destroyLike = postId => dispatch => (
    LikeAPIUtil.destroyLike(postId).then(post => dispatch(receivePost(post)))
);

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow).then(post => dispatch(receivePost(post)))
);

export const destroyFollow = authorId => dispatch => (
    FollowAPIUtil.destroyFollow(authorId).then(post => dispatch(receivePost(post)))
);