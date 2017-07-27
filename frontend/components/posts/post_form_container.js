import {connect} from 'react-redux';
import PostForm from './post_form';
import {createPost, clearErrors} from '../../actions/post_actions';
import {fetchAllTopics} from '../../actions/topic_actions';
import {selectAllTopics} from '../../reducers/selector';

const mapStateToProps = state => {
    return  {
        currentUser: state.session.currentUser,
        topics: selectAllTopics(state),
        errors: state.currentPost.errors
    }
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  fetchAllTopics: () => dispatch(fetchAllTopics()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

