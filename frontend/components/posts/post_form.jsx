import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            author_id: this.props.currentUser.id,
            body: "",
            topic_id: "",
            image_url: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderTopicDropbox = this.renderTopicDropbox.bind(this);
        this.upload = this.upload.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const post = this.state;
        console.log(post);
        this.props.createPost(post).then(post => this.props.history.push(`/posts/${post.id}`));
    }

    update(field) {
        return (e) => {
            this.setState({ [field] : e.target.value })
        };
    }

    componentDidMount(){
        this.props.fetchAllTopics();
    }

    upload(e){
        e.preventDefault();
        cloudinary.openUploadWidget(
            window.cloudinary_options,
            ((error, images) => {
                console.log(error)
                if(error === null) {
                    this.setState({
                        image_url: images[0].url
                    })
                }
            })
        )
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
            <div className="new-post-form">
                <form onSubmit={this.handleSubmit}>
                    <section className='new-post-title-holder'>
                        <input
                            type="text"
                            ref='title'
                            onChange={this.update('title')}
                            value={this.state.title}
                            className='new-post-title-input'
                            placeholder='Title'
                        />
                    </section>
                    <br />
                    <section className='new-post-body-holder'>
                        <textarea type="text"
                            className="body"
                            placeholder="this means quill isn't working..."
                            value={this.state.body}
                            onChange={this.update('body')} 
                        />
                    </section>
                    <br />
                    <div className="topic-chooser">
                        <label>Please select a topic for your story</label>
                        <br />
                        {this.renderTopicDropbox()}
                    </div>
                    <button onClick={this.upload}>Upload Image</button>
                    <div>
                        {this.state.image_url === '' ? null :
                             <div>
                                <img src={this.state.image_url} />
                            </div>}
                    </div>
                    <br />
                    <section className='new-post-submit-button'>
                        <input type="submit" value="Submit" />
                    </section>
                </form>
            </div>
        )
    }
}

export default PostForm