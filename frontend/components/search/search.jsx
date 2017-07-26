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
      <div className="search-container">
        <div className="search-bar title">
          <input 
            type="text" 
            onChange={this.update('search')} 
            placeholder="Search Midiem"
            autoFocus="autofocus"
          />
        </div>
         <div className="search-results">
           {this.state.search === "" ? "" : filterPost.map(post => <PostItem key={post.id} post={post}/>)}
        </div> 
      </div>
    )
  }
}

export default Search;