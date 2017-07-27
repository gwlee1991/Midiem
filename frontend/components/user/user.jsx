import React from 'react';
import PostItem from '../posts/post_item';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      image_url: this.props.currentUser.image_url,
      id: this.props.currentUser.id
    };
    this.edited = false;
    this.handleClick = this.handleClick.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  upload(e){
        e.preventDefault();
        cloudinary.openUploadWidget(
            window.cloudinary_options,
            ((error, images) => {
                if(error === null) {
                    this.edited = !this.edited;
                    this.setState({
                        image_url: images[0].url
                    });
                }
            })
        )
    }

  handleClick(e){
    e.preventDefault();
    this.edited= !this.edited;
    this.props.updateUser(this.state);
  }

  render(){
    console.log(this.props);
    return (
      <div className="profile-container">
        <div className="user">
          <div className="user-info">
            <div className="user-image">
              <img className="profile-image" src={this.state.image_url} />
              <button onClick={this.upload}>Upload Profile Picture</button>
              {this.edited ? 
              <div onClick={this.handleClick}><i className="fa fa-check" aria-hidden="true"></i></div> : "" }
            </div>
            <div className="username title">
              <h2 className="body">{this.props.currentUser.username}</h2>
              <p className="body greeting">This site was built with HTML/CSS/React/Redux/Javascript/Ruby on Rails within 9 days. Thank you for visiting</p>
            </div>
          </div>
          <div className="tabs body">
            <h3>Authored Posts</h3>
          </div>
        </div>
        <div className="authored-posts">
          {this.props.posts.map(post => {
            return <PostItem key={post.id} post={post}/>
          })}
        </div>
      </div>
    )
  }
}

export default User;