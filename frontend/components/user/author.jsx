import React from 'react';
import PostItem from '../posts/post_item';

class Author extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      <div className="profile-container">
        <div className="user">
          <div className="user-info">
            <div className="username title">
              <h2>{this.props.posts.length > 0 ? this.props.posts[0].author.username : ""}</h2>
            </div>
            <div className="user-image">
              {this.props.posts.length > 0 ? <img className="profile-image" src={this.props.posts[0].author.image_url} /> : ""}
            </div>
          </div>
          <div className="tabs body">
            <h3>Authored Posts</h3>
          </div>
        </div>
        <div className="authored-posts">
          {this.props.posts.map(post => {
            return <PostItem key={post.id} post={post}/>
          })}
        </div>
      </div>
    )
  }
}

export default Author;