import React from 'react';
import {Link} from 'react-router-dom';

class TopicSection extends React.Component {
    render(){
        const {topic} = this.props;
        return (
            <div className="topic-section">
                <div className="section-header">
                    <Link className="section-title" to={`/topics/${topic.id}`}>
                        {topic.title}
                    </Link>
                    <Link className="section-more" to={`/topics/${topic.id}`}>
                        More
                    </Link>
                </div>
                <div className="section-body">
                    <div className="posts">
                        Post1
                        image
                        author info
                    </div> 
                    <div className="posts">
                        Post2
                        image
                        author info
                    </div>
                </div>
            </div>
        )
    }
}

export default TopicSection;