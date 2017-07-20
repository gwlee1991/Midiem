import React from 'react';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        const {posts} = this.props;
        console.log(posts[0]);
        return (
            <div className="posts">
                This is the post div
            </div>
        )
    }
}

export default PostIndex;