import React from 'react';
import {Link} from 'react-router-dom';
import Comments from '../comments/comments';
import CommentFormContainer from '../comments/comment_form_container';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.renderEditDelete = this.renderEditDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.selectComment = this.selectComment.bind(this);
    }

    componentDidMount(){
        this.props.fetchComments(this.props.match.params.postId);
    }

    componentWillMount(){
        this.props.fetchPost()
    }

    selectComment(){
        let comments = []

        this.props.comments.forEach(comment => {
            if(comment.post_id === this.props.currentPost.id){
                comments.push(comment)
            }
        });

        return comments;
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
                    <CommentFormContainer />
                </section>
                <section>
                    {this.props.comments.length > 0 ? this.selectComment().map(comment => <Comments destroyComment={this.props.destroyComment} key={comment.id} comment={comment} />) : ""}
                </section>
              
            </div>
        )
    }
}

export default Post;