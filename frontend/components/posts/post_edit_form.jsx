import React from 'react';

class PostEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.currentPost.id,
            title: this.props.currentPost.title,
            author: this.props.currentPost.author,
            body: this.props.currentPost.body,
            topic_id: this.props.currentPost.topic_id,
            image_url: this.props.currentPost.image_url
        }
        this.update = this.update.bind(this);
        this.renderTopicDropbox = this.renderTopicDropbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = this.state;
        this.props.updatePost(post).then(post => this.props.history.push(`/posts/${this.state.id}`));
    }

    update(field) {
        return (e) => {
            this.setState({ [field] : e.target.value })
        };
    }

    componentDidMount(){
        this.props.fetchPost(this.props.match.postId).then(action => {
            this.setState(action.currentPost)});
    }

    componentWillMount(){
        this.props.fetchAllTopics();
    }

    renderTopicDropbox(){
        if(this.props.topics.length > 0){
            return (
                <select value={this.state.topic_id} onChange={this.update('topic_id')} >
                    {this.props.topics.map(topic => <option key={topic.id}value={topic.id}>{topic.title}</option>)}
                </select>
            )
        }
    }

    
    render(){
        return (
            <div className="edit-post-form">
                <form onSubmit={this.handleSubmit}>
                    <section className='edit-post-title-holder'>
                        <input
                            type="text"
                            ref='title'
                            onChange={this.update('title')}
                            value={this.state.title}
                            className='new-post-title-input title'
                            autoFocus="autofocus"
                        />
                    </section>
                    <br />
                    <section className='edit-post-body-holder'>
                        <textarea type="text"
                            className="body"
                            cols="80"
                            rows="20"
                            placeholder="Tell us about your story..."
                            value={this.state.body}
                            onChange={this.update('body')} 
                        />
                    </section>
                    <br />
                    <div className="topic-chooser">
                        <label>Please select a topic for your story: {this.renderTopicDropbox()}</label>
                    </div>
                    <br />
                    <section className='edit-post-submit-button-container'>
                        <input className="edit-post-submit-button" type="submit" value="Edit" />
                    </section>
                </form>
            </div>
        )
    }
}

export default PostEditForm;


