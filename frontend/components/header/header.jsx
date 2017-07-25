import React from 'react';
import { Link } from 'react-router-dom';

// header should have logo, webname
// depending on session state if(currentUser === null) show link to signup and sign in
// if currentUser Link to write story, userprofile, search, logout

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    renderLinks(){
        if (this.props.currentUser === null){
            return (
                <div className='auth-links'>
                    <Link to="/search"><button><i className="fa fa-search" aria-hidden="true"></i></button></Link>
                    <Link to='/login' className='login-link'>Log In</Link>
                    &nbsp;or&nbsp;
                    <Link to='/signup' className='signup-link'>Sign Up</Link>
                </div>
            )
        } else {
            return (
                <div className='user-interface'>
                    <Link to="/search"><button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
                    {this.renderNewPost()}
                    <button onClick={this.props.logout} className='logout-button'>Log Out</button>
                    <Link to={`/user/${this.props.currentUser.id}/profile`}><button className='username'><img className="header-user-image" src={this.props.currentUser.image_url} /></button></Link>
                </div>
            )
        }
    }

    renderNewPost(){
        return (
            <span className='new-post-button'>
                <Link to='/new-post'>Write New Story</Link>
            </span>
        )
    }

    renderDefault(){
        return (
            <div className='logo'>
                <Link to='/' className='logo-img'><img src="http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_45/v1500415014/logo_dlhocm.png" height="10" width="10" /></Link>
                <Link to='/' className='logo-text'>Midiem</Link>
            </div>
        )
    }

    render(){
        return (
            <header className='header-nav'>
                {this.renderDefault()}
                {this.renderLinks()}
            </header>
        )
    }
}

export default Header;