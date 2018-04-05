import React from 'react';
import PostItem from '../posts/post_item';

class Author extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPosts().then(() => {
      let id = this.props.posts[0].author.id;
      $.ajax({
        method: "GET",
        url: `/api/users/${id}`
      }).then(user => {
        this.setState({
          follows: user.follows,
          followsCount: user.follows_count,
          followers: user.followers,
          followersCount: user.followers_count
        });
      })
    })
  }

  displayFollows(){
    if(this.state){
      return (
        <div className="follows body">
          <span className="body">follows: {this.state.followsCount}</span>
          <span className="body">followers: {this.state.followersCount}</span>
        </div>
      );
    }
  }

  render(){
    return (
      <div className="profile-container">
        <div className="user">
          <div className="user-info">
            <div className="user-image">
              {this.props.posts.length > 0 ? <img className="profile-image" src={this.props.posts[0].author.image_url} /> : ""}
            </div>
            <div className="username title">
              <h2>{this.props.posts.length > 0 ? this.props.posts[0].author.username : ""}</h2>
              {this.displayFollows()}
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