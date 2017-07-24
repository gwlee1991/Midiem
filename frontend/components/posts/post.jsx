import React from 'react';
import {Link} from 'react-router-dom';
import Comments from '../comments/comments';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.renderEditDelete = this.renderEditDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderCOmments = this.renderComments.bind(this);
    }

    componentWillMount(){
        this.props.fetchPost()
    }

    handleDelete(e){
        this.props.destroyPost(this.props.currentPost.id).then(posts => this.props.history.push("/"))
    }

    renderEditDelete(){
        if (this.props.session.currentUser){
            if (this.props.currentPost.author.id === this.props.session.currentUser.id) {
                return (
                    <div className="edit-delete-button">
                        <Link to={`/edit/${this.props.currentPost.id}`}><button className='edit-button'>Edit</button></Link>
                        <button className="delete-button" onClick={this.handleDelete}>Delete</button>
                    </div>
                )
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    renderComments(){
        if (this.props.currentPost.id){
            return this.props.currentPost.comments.map(comment => <Comments key={comment.id} comment={comment} />)
        }
    }

    render() {
        return (
            <div className="post-container">
                <section className="post-show-imageholder">
                    <section className="post-show-author-info">
                        <div className="author-info">
                            <span>{this.props.currentPost.author.username}</span>
                        </div>
                        {this.renderEditDelete()}
                    </section>
                    <img className='cover-image' src={this.props.currentPost.image_url} alt='cover-image' />
                </section>
                <section className="post-show-content">
                    <h2 className='post-show-title'>{this.props.currentPost.title}</h2>
                    <br />
                    <p className='post-show-body'>{this.props.currentPost.body}</p>
                </section>
                <section>
                </section>
              
            </div>
        )
    }
}

export default Post;