import React, { Component } from 'react';
import { Link } from 'react-router';
import '../CSS/SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: '',
      },
    };
  }

  render() {
    return (
      <div className="form-inline">
        <h2>Sign In</h2>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user" />
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="E-Mail"
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <br />
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock" />
          </span>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.signIn()}
          style={{ marginBottom: '10px' }}
        >
          Sign In
        </button>

        <div><Link to="/signup">Register Now!</Link></div>

        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default SignIn;
