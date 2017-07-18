import React from 'react';
import {Link ,withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    console.log(this.props);
  }

  update(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    });
  }

  render(){
    if (this.props.formType === "login") {
      return (
        <div>
          <form>
            <h2>Log In</h2>
            <input
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.update('username')}
            />
            <input
              type="password"
              value={this.state.password}
              placeholder='password'
              onChange={this.update('password')}
            />
          <br />
          <input type="submit" value="Log In" />
          <p>or</p>
          <input type="submit" value="Demo Login!" />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <form>
            <h2>Sign Up</h2>
            <input
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.update('username')}
            />
            <input
            type="password"
            value={this.state.password}
            placeholder='password'
            onChange={this.update('password')}
            />
          <br />
          <input type="submit" value="Sign Up" />
          <br />
          <p>or</p>
          <input type="submit" value="Demo Login!" />
          </form>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
