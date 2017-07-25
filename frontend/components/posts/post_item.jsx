import React from 'react';
import {Link} from 'react-router-dom';
import PostContainer from './post_container';

class PostItem extends React.Component {

    render(){
        const {post} = this.props;
        return (
            <div className="post">
                <div className="post-image-holder">
                    <Link to={`/posts/${post.id}`}><img src={post.image_url} alt="picture-of-post" className="post-item-image" /></Link>
                </div>
                <div className="post-detail-holder">
                    <div>
                        <Link to={`/posts/${post.id}`}><div className="post-title">{post.title}</div></Link>
                    </div>
                    <div>
                        <Link to={`/user/${post.author.id}`}><div className="post-author-image-container"><img className="post-author-image" src={post.author.image_url} height="20" width="20"/></div></Link>
                        <Link to={`/user/${post.author.id}`}><div className="post-author">{post.author.username}</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;