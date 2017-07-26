import {connect} from 'react-redux';
import Author from './author';
import {selectPostsUser} from '../../reducers/selector';
import {fetchPosts} from '../../actions/post_actions'; 

const mapStateToProps = (state, props) => ({
  posts: selectPostsUser(props.match.params.userId, state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);