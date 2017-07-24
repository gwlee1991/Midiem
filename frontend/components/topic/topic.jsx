import React from 'react';

class Topic extends React.Component {
  constructor(props){
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount(){
    this.props.fetchTopic();
    this.props.fetchPosts();
  }

  renderPosts(){
    console.log(this.props.posts);
    if (this.props.posts.length > 1){
      this.props.posts.map(post=> {
        return (
          <li>
            {post.title}
          </li>
        )
      })
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <h2>{this.props.topics.title}</h2>
        <ul>{this.renderPosts()}</ul>

      </div>
    )
  }
}

export default Topic;