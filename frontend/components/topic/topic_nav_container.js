import { connect } from 'react-redux';
import {selectAllTopics, selectAllPosts} from '../../reducers/selector';
import { fetchAllTopics } from '../../actions/topic_actions';
import {fetchPosts} from '../../actions/post_actions';
import TopicNav from './topic_nav';


const mapStateToProps = state => ({
    topics: selectAllTopics(state),
    posts: selectAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAllTopics: () => dispatch(fetchAllTopics()),
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicNav);
