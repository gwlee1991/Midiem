import merge from 'lodash/merge';
import { RECEIVE_ALL_COMMENTS, DELETE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions';


const nullComments = {
  1: {
    body: "",
    author: {},
    post_id: "",
    written_on: ""
  }
}

const CommentsReducer = (state = nullComments, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      const comments = action.comments;
      return merge({}, state, comments);
    case DELETE_COMMENT:
      let nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment})
    default:
      return state;
  }
}

export default CommentsReducer;