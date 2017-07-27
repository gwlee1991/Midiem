import React from 'react';
import {Link ,withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_32/v1501014959/default-user-image_gvyan3.png"
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
      if (this.state.image_url === "") {
        this.setState({
          image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_32/v1501014959/default-user-image_gvyan3.png"
        })
      }
      this.props.processForm(user);
      this.setState({
        username: "",
        password: ""
      });
  }

  handleDemoLogin(e){
      e.preventDefault();
      const user = {
          username: "guest",
          password: "password"
      };
      this.props.login(user);
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
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
                <h1 className='form-title title'>Midiem</h1>
                <h2 className='web-description body'>Share your stories with the world</h2>
                <h3>Log In</h3>

                {this.renderErrors()}
                <input
                    className="username-input body"
                    type="text"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.update('username')}
                />
                <input
                    className="password-input body"
                    type="password"
                    value={this.state.password}
                    placeholder='password'
                    onChange={this.update('password')}
                />
                <br />
                <input className="auth-button body" type="submit" value="Log In" />
                <p>or</p>
                <input className="demo-button body" type="submit" value="Demo Login!" onClick={this.handleDemoLogin} />
            </form>
        </div>
      )
    } else {
      return (
        <div className='body-without-header'>
          <form onSubmit={this.handleSubmit} className='sign-up-form'>
            <h1 className='form-title title'>Midiem</h1>
            <h2 className='web-description body'>Share your stories with the world</h2>
            <h3>Sign Up</h3>
            {this.renderErrors()}
            <input
              className="username-input body"
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.update('username')}
            />
            <input
              className="password-input body"
              type="password"
              value={this.state.password}
              placeholder='password'
              onChange={this.update('password')}
            />
          <br />
          <input className="auth-button body" type="submit" value="Sign Up" />
          <br />
          <p>or</p>
          <input className="demo-button body" type="submit" value="Demo Login!" onClick={this.handleDemoLogin} />
          </form>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
