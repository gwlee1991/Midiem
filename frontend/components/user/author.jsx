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
    if (this.props.posts.length>0){

      console.log(this.props.posts[0].author);
    }
    console.log(this.props.posts);
    return (
      <div>
        <div>
          <section>
            <div>
              <h2>{this.props.posts.length > 0 ? this.props.posts[0].author.username : ""}</h2>
            </div>
            <div>
              {this.props.posts.length > 0 ? <img src={this.props.posts[0].author.image_url} /> : ""}
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