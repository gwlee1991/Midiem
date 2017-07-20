import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';
import PostIndex from './post_index';
import {selectAllPosts} from '../../reducers/selector';

const mapStatetoProps = state => {
    console.log("this is in the container: ");
    console.log(state);
    return ({
        posts: selectAllPosts(state)
    })
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(PostIndex);