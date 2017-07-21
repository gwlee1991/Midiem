import React from 'react';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.renderButtons = this.renderButtons.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount(){
        this.props.fetchPost()
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyPost();
    }

    renderButtons(){
        console.log("this was run");
        if (this.props.session.currentUser.id === this.props.currentPost.author) {
            return (
                <section className='edit-delete-button'>
                    <Link to={`/post/edit/${thisprops.currentPost.id}`}>Edit</Link>
                    <Link to="/" onClick={this.handleDelete}>Delete</Link>
                </section>
            )
        }
    }


    render() {
        return (
            <div>
                <section className="post-show-imageholder">
                    <img className='cover-image' src={this.props.currentPost.image_url} alt='cover-image' />
                </section>
                <section className="post-show-body">
                    <h2>{this.props.currentPost.title}</h2>
                    <br />
                    <p>{this.props.currentPost.body}</p>
                    <br />
                </section>
            </div>
        )
    }
}

export default Post;