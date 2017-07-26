import React from 'react';
import PostItem from '../posts/post_item';

class User extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div>
          <section>
            <div>
              <h2>{this.props.currentUser.username}</h2>
            </div>
            <div>
              <img src={this.props.currentUser.image_url} />
            </div>
          </section>
        </div>
        <div>
          <h3>Authored Posts</h3>
        </div>
        <div>
          <ul>
            {this.props.posts.map(post => {
              return <PostItem key={post.id} post={post}/>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default User;