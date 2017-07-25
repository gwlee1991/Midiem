import {connect } from 'react-redux';
import Search from './search';
import {fetchPosts} from '../../actions/post_actions'

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);