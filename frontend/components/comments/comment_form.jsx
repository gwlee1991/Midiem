import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = this.state;
    comment.post_id = this.props.currentPost.id;
    this.props.createComment(comment).then( () => {
      this.setState({
        body: ""
      })
    });
  }



  render(){
    return (
      <div className='comment-form-with-title'>
        <h4 className="comment-form-title title"> Responses</h4>
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <div className="post-author-image-container">
              <img className="comment-author-image" src={this.props.currentUser.image_url}/> <br />
            </div>
            <div className="response-body">
              <textarea
                type="text"
                cols='50'
                rows='5'
                className="comment-body body"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="write your comments..."
              />
            </div>
            <input className="comment-submit-button body" type='submit' value='Publish' />
          </form>
      </div>
    )
  }
}

export default CommentForm;