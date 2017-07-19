import { connect } from 'react-redux';
import {selectAllTopics} from '../../reducers/topic_selector';
import { fetchAllTopics } from '../../actions/topic_actions';
import TopicNav from './topic_nav';

const mapStateToProps = state => ({
    topics: selectAllTopics(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAllTopics: ()=> dispatch(fetchAllTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicNav);
