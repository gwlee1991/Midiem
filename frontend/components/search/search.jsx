import React from 'react';
import PostItem from '../posts/post_item';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPosts();
  }

  renderPosts(){
    this.props.posts.map(post => {
      <PostItem key={post.id} post={post} />
    })
  }

  render(){
    return (
      <div>{this.renderPosts}</div>
    )
  }
}

export default Search;