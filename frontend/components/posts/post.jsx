import React from 'react';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.renderButtons = this.renderButtons.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount(){
        this.props.fetchPost().then(post => {
            return this.props.session.currentUser.id === this.props.currentPost.author.id
        });
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyPost();
    }

    renderButtons(){
        if (this.props.session.currentUser === this.props.currentPost.author) {
            return (
                <section className='edit-delete-button'>
                    <Link to={`/post/edit/${thisprops.currentPost.id}`}>Edit</Link>
                    <Link to="/" onClick={this.handleDelete}>Delete</Link>
                </section>
            )
        }
    }


    render() {
        console.log(this.props.session.currentUser.id);
        console.log(this.props.currentPost.author.id);
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
                {this.renderButtons()}
            </div>
        )
    }
}

export default Post;