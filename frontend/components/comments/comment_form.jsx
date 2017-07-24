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
    console.log(this.props.currentPost)
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
          <input type='submit' value='Publish' />
        </form>
      </div>
    )
  }
}

export default CommentForm;