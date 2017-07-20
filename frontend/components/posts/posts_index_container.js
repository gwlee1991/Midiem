import {connect} from 'react-redux';
import {fetchAllPosts} from '../../actions/post_actions';
import PostIndex from './post_index';
import selectAllPosts from '../reducers/selector';

const mapStatetoProps = state => ({
    posts: selectAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(PostIndex);