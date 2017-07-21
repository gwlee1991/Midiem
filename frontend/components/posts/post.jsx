import React from 'react';

class Post extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchPost()
    }

    render() {
        return (
            <div className="post-container">
                <section className="post-show-imageholder">
                    <img className='cover-image' src={this.props.currentPost.image_url} alt='cover-image' />
                </section>
                <section className="post-show-body">
                    <h2>{this.props.currentPost.title}</h2>
                    <br />
                    <p>{this.props.currentPost.body}</p>
                    <br />
                </section>
                <section className="post-show-author info">
                    <div className="author-image">
                    </div>
                    <div className="author-username">
                        <span>{this.props.currentPost.author.username}</span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Post;