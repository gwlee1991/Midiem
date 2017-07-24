import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(receiveComments(comment))
  ))
);