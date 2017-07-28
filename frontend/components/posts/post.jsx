import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comments/comments';
import CommentFormContainer from '../comments/comment_form_container';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.renderEditDelete = this.renderEditDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.selectComment = this.selectComment.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.postId);
    }

    componentWillMount() {
        this.props.fetchPost()
    }

    componentWillUnmount() {
        this.props.clearState();
    }

    selectComment() {
        let comments = []

        this.props.comments.forEach(comment => {
            if (comment.post_id === this.props.currentPost.id) {
                comments.push(comment)
            }
        });

        return comments;
    }

    handleDelete(e) {
        this.props.destroyPost(this.props.currentPost.id).then(posts => this.props.history.push("/"))
    }

    renderEditDelete() {
        if (this.props.session.currentUser) {
            if (this.props.currentPost.author.id === this.props.session.currentUser.id) {
                return (
                    <div className="edit-delete-button body">
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

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleUpdate(postId) {
        if (this.props.currentPost.liked) {
            return () => this.props.destroyLike(postId);
        } else {
            return () => this.props.createLike({ post_id: postId });
        }
    }

    toggleHeart() {
        if (this.props.session.currentUser) {
            if (this.props.currentPost.liked) {
                return (
                    <i className="fa fa-heart" aria-hidden="true"></i>
                );
            } else {
                return (
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                );
            }
        } else {
            return "";
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.currentPost.errors.map((error, i) => (
                    <li className="errors body" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="post-container">
                <div className="post-main">
                    <section className="post-show-imageholder">
                        <section className="post-show-author-info">
                            <div className="author-info">
                                <Link to={`/user/${this.props.currentPost.author.id}`}>
                                    <span>
                                        <img className="post-author-image" src={this.props.currentPost.author.image_url} />
                                        {this.props.currentPost.author.username}
                                    </span>
                                </Link>
                            </div>
                        </section>
                        <button id='heart' className="white" onClick={this.handleUpdate(this.props.currentPost.id)}>{this.toggleHeart()}</button>
                        <h5 className="body">Likes: {this.props.currentPost.likes}</h5>
                        <h2 className='post-show-title title'>{this.props.currentPost.title}</h2>
                        <Link to={`/user/${this.props.currentPost.author.id}`}>
                            <div className='post-cover-image'><img className='cover-image' src={this.props.currentPost.image_url} alt='cover-image' /></div>
                        </Link>
                    </section>
                    <section className="post-show-content">
                        <p className='post-show-body'>{this.props.currentPost.body}</p>
                    </section>
                    {this.renderEditDelete()}
                    {this.renderErrors()}
                    <section>
                        {this.props.session.currentUser ? <CommentFormContainer /> : ""}
                    </section>
                    <section>
                        {this.props.comments.length > 0 ? this.selectComment().map(comment => <Comments currentUser={this.props.session.currentUser} destroyComment={this.props.destroyComment} key={comment.id + 1} comment={comment} />) : ""}
                    </section>
                </div>
            </div>
        )
    }
}

export default Post;