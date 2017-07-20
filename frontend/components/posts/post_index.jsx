import React from 'react';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchAllPosts()
    }

    render(){
        const {posts} = this.props;
        return (
            <div className="posts">
                hello
            </div>
        )
    }
}

export default PostIndex;