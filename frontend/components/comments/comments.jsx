import React from 'react';
import {Link} from 'react-router-dom';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    if (this.props.currentUser.id === this.props.comment.author.id){
      this.props.destroyComment(this.props.comment.id);
    }
  }

  render () {
    console.log(this.props);
    return (
      <div className="comment-box">
        <div>
          <Link to={`/user/${this.props.comment.author.id}`}>{this.props.comment.author.username}</Link>
        </div>
        <div>
          {this.props.comment.body}
          <button className='delete-comment-button' onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Comments;