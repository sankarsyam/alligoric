import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Header from './Header';
import DashboardPage from '../components/DashboardPage';
import HomePage from '../components/HomePage';
import LoginPage from './LoginPage';
import RequireAuthentication from './RequireAuthentication';
import AppMenu from './AppMenu';

import './App.css';
import 'material-design-icons/iconfont/material-icons.css';

export class App extends Component {
  checkAuthenticated(component, path) {
    const Component = component;
    return this.props.isAuthenticated ? (
      <Redirect to={path} />
    ) : (
      <Component to="/login" />
    );
  }

  headerMenu = () => {};
  render() {
    return (
      <div className="App">
        {this.props.isAuthenticated ? <Header /> : null}
        {this.props.isAuthenticated ? (
          <AppMenu history={this.props.history} />
        ) : null}

        <div className="App-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => this.checkAuthenticated(Redirect, '/home')}
            />
            <Route
              path="/login"
              component={() => this.checkAuthenticated(LoginPage)}
            />
            <Route path="/home" component={RequireAuthentication(HomePage)} />
            <Route
              path="/dashboard"
              component={RequireAuthentication(DashboardPage)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(App));
