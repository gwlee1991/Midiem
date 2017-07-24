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
    console.log(this.props.topic);
    return(
      <div>
        <div>
          {this.props.topic.title}
        </div>
        <div>
          <ul>
            {this.props.posts.map(post => <PostItem key={post.id} post={post} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Topic;