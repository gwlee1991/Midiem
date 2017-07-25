import React from 'react';
import PostItem from '../posts/post_item';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render(){
    const {posts} = this.props;
    const filterPost = posts.filter(
      post =>
        post.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        post.body.toLowerCase().includes(this.state.search.toLowerCase()) ||
        post.author.username.toLowerCase().includes(this.state.search.toLowerCase())
    )
    
    return (
      <div>
        <input type="text" onChange={this.update('search')} />
         <div>
           {this.state.search === "" ? "" : filterPost.map(post => <PostItem key={post.id} post={post}/>)}
        </div> 
      </div>
    )
  }
}

export default Search;