import {connect} from 'react-redux';
import {fetchPost, updatePost, destroyPost} from "../../actions/post_actions";
import Post from './post';
import {selectPost} from '../../reducers/selector';

const mapStateToProps = state => {
    return ({
        currentPost: state.currentPost,
        session: state.session
    })
}


const mapDispatchToProps = (dispatch, props) => ({
    fetchPost: () => dispatch(fetchPost(props.match.params.postId)),
    updatePost: () => dispatch(updatePost(props.match.params.postId)),
    destroyPost: (id) => dispatch(destroyPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
