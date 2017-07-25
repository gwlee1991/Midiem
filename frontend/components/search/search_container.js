import {connect } from 'react-redux';
import Search from './search';
import {fetchPosts} from '../../actions/post_actions'
import {selectAllPosts} from '../../reducers/selector';

const mapStateToProps = state => ({
  posts: selectAllPosts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);