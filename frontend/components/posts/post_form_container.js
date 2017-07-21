import {connect} from 'react-redux';
import PostForm from './post_form';

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

