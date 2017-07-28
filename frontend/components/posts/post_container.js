import {connect} from 'react-redux';
import {fetchPost, updatePost, destroyPost, clearErrors, clearState, createLike, destroyLike} from "../../actions/post_actions";
import Post from './post';
import {selectPost, selectAllComments} from '../../reducers/selector';
import {fetchComments, destroyComment} from '../../actions/comment_actions';

const mapStateToProps = state => {
    return ({
        currentPost: state.currentPost,
        session: state.session,
        comments: selectAllComments(state)
    })
}


const mapDispatchToProps = (dispatch, props) => ({
    fetchPost: () => dispatch(fetchPost(props.match.params.postId)),
    updatePost: () => dispatch(updatePost(props.match.params.postId)),
    destroyPost: (id) => dispatch(destroyPost(id)),
    fetchComments: () => dispatch(fetchComments(props.match.params.postId)),
    destroyComment: (id) => dispatch(destroyComment(id)),
    clearState: () => dispatch(clearState()),
    createLike: like => dispatch(createLike(like)),
    destroyLike: id => dispatch(destroyLike(id)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
