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
                <div>
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>{this.props.currentUser.username}</h2>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            )
        }
    }

    renderDefault(){
        return (
            <div>
                <span>Logo</span>
                <span>Midiem</span>
            </div>
        )
    }

    render(){
        return (
            <header>
                {this.renderDefault()}
                {this.renderLinks()}
            </header>
        )
    }
}

export default Header;