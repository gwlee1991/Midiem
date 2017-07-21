import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: "",
            title: "",
            author_id: this.props.currentUser.id,
            body: "",
            topic_id: "",
            image_url: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = this.state;
        this.props.createPost(post).then(post => this.props.history.push(`/posts/${post.id}`));
    }

    update(field) {
        return (e) => this.setState({ [field] : e.target.value });
    }
    render(){
        return (
            <div className="new-post-form">
                <form>
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
                            placeholder="Tell us your story..."
                            value={this.state.body}
                            onChange={this.update('body')} 
                        />
                    </section>
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