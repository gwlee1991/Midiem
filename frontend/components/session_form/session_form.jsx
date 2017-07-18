import React from 'react';
import {Link ,withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(input){
    return e => this.setState({
      [input]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.loggedIn){
          this.props.history.push('/');
      }
  }

  handleSubmit(e){
      e.preventDefault();
      const user = this.state;
      this.props.processForm(user);
  }

  handleDemoLogin(e){
      e.preventDefault();
      const user = {
          username: "guest",
          password: "password"
      };
      this.props.processForm(user);
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
        ))}
      </ul>
  );
}

  render(){
    if (this.props.formType === "login") {
        return (
        <div className='body-without-header'>

            <form onSubmit={this.handleSubmit} className='log-in-form'>
                <h1>Midiem</h1>
                <h2>Share your stories with the world</h2>
                <h3>Log In</h3>
                {this.renderErrors()}
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
                <input type="submit" value="Demo Login!" onClick={this.handleDemoLogin} />
            </form>
        </div>
      )
    } else {
      return (
        <div className='body-without-header'>
          <form onSubmit={this.handleSubmit} className='sign-up-form'>
            <h1>Midiem</h1>
            <h2>Share your stories with the world</h2>
            <h3>Sign Up</h3>
            {this.renderErrors()}
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
          <input type="submit" value="Demo Login!" onClick={this.handleDemoLogin} />
          </form>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
