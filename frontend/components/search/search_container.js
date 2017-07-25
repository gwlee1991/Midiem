import {connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);