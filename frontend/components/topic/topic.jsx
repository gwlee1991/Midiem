import React from 'react';
import {Link} from 'react-router-dom';
import PostItem from '../posts/post_item';

class Topic extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTopic(this.props.match.params.topicId)
    this.props.fetchPosts();
  }

  render(){
    return(
      <div className="topic-show-page">
        <div className="topic-show-title">
          {this.props.topic.title}
        </div>
        <div className="topic-posts-container">
          <ul className="topic-posts">
            {this.props.posts.map(post => <PostItem key={post.id} post={post} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Topic;