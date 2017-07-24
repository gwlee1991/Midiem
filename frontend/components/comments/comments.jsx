import React from 'react';

class Comments extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="comment-box">
        <div>
          {this.props.comment.author.username}
        </div>
        <div>
          {this.props.comment.body}
        </div>
      </div>
    )
  }
}

export default Comments;