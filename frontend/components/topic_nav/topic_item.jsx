import React from 'react';
import {Link} from 'react-router-dom';

class TopicItem extends React.Component {
    render(){
        const { topic } = this.props;
        return (
            <li className="topic-item">
                <Link to={`/topics/${topic.id}`}>
                    {topic.title}
                </Link>
            </li> 
        )
    }
};


export default TopicItem;