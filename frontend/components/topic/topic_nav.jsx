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
                <div className="splash-logo">
                    <div className="splash-logo-text title">Home to unique experiences from around the world.</div>
                    <div className="splash-logo-subtext body">Hear directly from the people who know it best. From tech to e-sports we got you covered</div>
                </div>

                {topics.map(topic => <TopicSection key={topic.id} topic={topic} posts={posts}/>)}
            </div>
            </div>
        )
    }
}

export default TopicNav;

