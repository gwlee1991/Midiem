import {connect} from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = state => {
    return  {
        currentUser: state.session.currentUser
    }
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

