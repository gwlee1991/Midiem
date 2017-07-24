import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { updatePost, fetchPost } from '../../actions/post_actions';
import {fetchAllTopics} from '../../actions/topic_actions';
import {selectPost} from '../../reducers/selector';

import {selectAllTopics} from '../../reducers/selector';

const mapStateToProps = (state, props) => {
    return {
        currentPost: state.currentPost,
        currentUser: state.session.currentUser,
        topics: selectAllTopics(state)
    }
};


const mapDispatchToProps = (dispatch, props) => ({
    updatePost: (post) => dispatch(updatePost(post)),
    fetchPost: () => dispatch(fetchPost(props.match.params.postId)),
    fetchAllTopics: () => dispatch(fetchAllTopics())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditForm);