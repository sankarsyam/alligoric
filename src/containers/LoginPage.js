import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'react-md/lib/Cards';
import { TextField, Button } from 'react-md';
import MdLock from 'react-icons/lib/md/lock';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './LoginPage.css';
import { loginCheck } from '../store/user/action';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onSubmit(event) {
    event.preventDefault(); // to prevent refresh(default form behaviour)
    const { email, password } = this.state;
    this.props.dispatch(loginCheck(email, password));
    this.setState({ email: '', password: '' });
    // history('/dashboard');
  }

  renderError() {
    if (this.props.error) {
      return <div className="error">{this.props.error}</div>;
    }
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }
  render() {
    return (
      <Card className="LoginPage-card">
        <MdLock className="Login-icon" />
        <CardText>
          {this.renderError()}
          <TextField
            id="email"
            label="Email"
            placeholder="example@example.com"
            type="email"
            onChange={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextField
            id="password"
            label="Password"
            placeholder="••••••••••••"
            type="password"
            onChange={password => this.setState({ password })}
            value={this.state.password}
          />
          <div>
            <Button
              id="submit-button"
              disabled={!this.validateForm()}
              label="Log In"
              raised
              primary
              type="submit"
              onClick={this.onSubmit}
              className="Login-button"
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  // error: state.user.message?state.user.message.list[0]:'',
});

export default withRouter(connect(mapStateToProps)(LoginPage));
