import React from 'react';
import {Link} from 'react-router-dom';
import PostContainer from './post_container';

class PostItem extends React.Component {

    constructor(props){
        super(props);
        this.getDate = this.getDate.bind(this);
        this.date = this.getDate();
    }

    getDate(){
        let date = new Date(this.props.post.written_on);
        return date.toLocaleDateString();
    }

    render(){
        const {post} = this.props;
        return (
            <div className="post">
                <div className="post-image-holder">
                    <Link to={`/posts/${post.id}`}><img src={post.image_url} alt="picture-of-post" className="post-item-image" /></Link>
                </div>
                <div className="post-detail-holder">
                    <div>
                        <Link to={`/posts/${post.id}`}><div className="post-title title">{post.title}</div></Link>
                    </div>
                    <div>
                        <Link to={`/user/${post.author.id}`}><div className="post-author-image-container"><img className="post-author-image" src={post.author.image_url} height="20" width="20"/></div></Link>
                        <Link to={`/user/${post.author.id}`}><div className="post-author">{post.author.username}</div></Link>
                        <p className='body date'>{this.date.slice(3,5)+"/"+this.date.slice(0,2)+"/"+this.date.slice(6)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;