import {connect} from 'react-redux';
import Topic from './topic';
import {fetchPosts} from '../../actions/post_actions';
import {selectTopic, selectAllPosts} from '../../reducers/selector';
import {fetchTopic} from '../../actions/topic_actions';

const mapStateToProps = (state, props) => ({
  posts: selectAllPosts(state),
  currentUser: state.session.currentUser,
  topics: selectTopic(state, props.match.params.topicId)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchTopic: () => dispatch(fetchTopic(props.match.params.topicId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Topic);