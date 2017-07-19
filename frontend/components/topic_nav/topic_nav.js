import React from 'react';
import {selectAllTopics} from '../../reducers/topic_selector';
import TopicItem from './topic_item';

class TopicNav extends React.Component {
    componentDidMount(){
        this.props.fetchAllTopics()
    }

    render(){
        const { topics } = this.props;
        return (
            <nav className='topic-navbar'>
                <ul className="topic-navbar-ul">
                    {topics.map(topic => <TopicItem key={topic.id} topic={topic} />)}
                </ul>
            </nav>
        )
    }
}

export default TopicNav;

