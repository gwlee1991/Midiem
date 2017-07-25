import {connect} from 'react-redux';
import User from './user';
import {selectPostsUser} from '../../reducers/selector';
import {fetchPosts} from '../../actions/post_actions';

const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  posts: selectPostsUser(props.match.params.userId, state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);