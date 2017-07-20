import React from 'react';
import TopicItem from './topic_item';
import TopicSection from './topic_section';

class TopicNav extends React.Component {
    componentDidMount(){
        this.props.fetchAllTopics()
        this.props.fetchPosts();
    }

    render(){
        const { topics, posts } = this.props;
        return (
            <div>
            <nav className='topic-navbar'>
                <ul className="topic-navbar-ul">
                    {topics.map(topic => <TopicItem key={topic.id} topic={topic} posts={posts} />)}
                </ul>
            </nav>
            <div className="topic-section-container">
                {topics.map(topic => <TopicSection key={topic.id} topic={topic} posts={posts}/>)}
            </div>
            </div>
        )
    }
}

export default TopicNav;

