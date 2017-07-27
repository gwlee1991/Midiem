import React from 'react';
import {Link} from 'react-router-dom';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.getDate = this.getDate.bind(this);
    this.date = this.getDate();
  }

  getDate(){
    let date = new Date(this.props.comment.written_on);
    return date.toLocaleDateString();
  }

  handleDelete(e){
    e.preventDefault();
    if (this.props.currentUser.id === this.props.comment.author.id){
      this.props.destroyComment(this.props.comment.id);
    }
  }

  render () {
    return (
      <div className="comment-box">
        <div className="body comment-author-info">
          <div className="body comment-author-image-container">
          <Link to={`/user/${this.props.comment.author.id}`}><img className="comment-author-image" src={this.props.comment.author.image_url} /></Link>
          </div>
          <div className="body comment-author-detailed-info">
            <div>
              <Link to={`/user/${this.props.comment.author.id}`}>{this.props.comment.author.username}</Link>
            </div>
              <p className='body date'>{this.date.slice(3,5)+"/"+this.date.slice(0,2)+"/"+this.date.slice(6)}</p>
          </div>
        </div>
        <div className="body comment-body">
          {this.props.comment.body}
        </div>
        <div className="delete-comment-button-container">
          <button className='delete-comment-button body' onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Comments;