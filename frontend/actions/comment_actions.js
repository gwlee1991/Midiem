import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
})

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});


export const fetchComments = comments => dispatch => (
  APIUtil.fetchComments().then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const destroyComment = id => dispatch => (
  APIUtil.destroyComment(id).then(()=> dispatch(deleteComment(id))).then(()=> (
    dispatch(receiveComments())
  ))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ))
);