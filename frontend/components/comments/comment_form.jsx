import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      author: {
        username: this.props.currentUser.username,
        id: this.props.currentUser.id,
        image_url: this.props.currentUser.image_url
      },
      post_id: this.props.currentPost.id
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
    this.props.createComment(comment)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            cols='50'
            className="comment-body"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="write your comments..."
          />
          <input type='submit' value='Comment' />
        </form>
      </div>
    )
  }
}

export default CommentForm;