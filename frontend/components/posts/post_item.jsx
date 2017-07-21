import React from 'react';
import {Link} from 'react-router-dom';
import PostContainer from './post_container';

class PostItem extends React.Component {

    render(){
        const {post} = this.props;
        return (
            <div className="post">
                <div className="post-image-holder">
                    <Link to={`/posts/${post.id}`}><img src={post.image_url} alt="picture-of-Faker" height="80" width="40"/></Link>
                </div>
                <div className="post-detail-holder">
                    <Link to={`/posts/${post.id}`}><span className="post-title">{post.title}</span></Link>
                    <span className="post-author">{post.author.username}</span>
                </div>
            </div>
        )
    }
}

export default PostItem;