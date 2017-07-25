import React from 'react';
import {Link} from 'react-router-dom';
import PostItem from '../posts/post_item';

class TopicSection extends React.Component {
    constructor(props){
        super(props);
        this.filterId = this.filterId.bind(this);
    }

    filterId(posts){
        const result = []
        posts.forEach(post => {
            if(post.topic_id === this.props.topic.id){
                result.push(post);
            }
        })
        return result.slice(0,2);
    }

    render(){
        const {topic} = this.props;
        const topicPosts = this.filterId(this.props.posts);
        return (
            <div className="topic-section">
                <div className="section-header">
                    <Link className="section-title" to={`/topics/${topic.id}`}>
                        <h3>{topic.title}</h3>
                    </Link>
                    <Link className="section-more" to={`/topics/${topic.id}`}>
                        More >
                    </Link>
                </div>
                <div className="section-body">
                    {topicPosts.map(post => <PostItem key={post.id} post={post} />)}
                </div>
            </div>
        )
    }
}

export default TopicSection;