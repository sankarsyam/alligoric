import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Toolbar from 'react-md/lib/Toolbars';

import MenuDrawer from '../components/MenuDrawer';
import { logout } from '../store/user/action';

import './Header.css';

class Header extends Component {
  renderMenuDrawer() {
    console.log(
      '############# this.props.isAuthenticated ' + this.props.isAuthenticated
    );
    return this.props.isAuthenticated ? (
      <MenuDrawer
        handleLogout={() => this.props.dispatch(logout())}
        history={this.props.history}
        isAuthenticated={this.props.isAuthenticated}
      />
    ) : null;
  }

  render() {
    return (
      <div className="Header">
        <Toolbar
          actions={[this.renderMenuDrawer()]}
          className="Header-toolbar"
          colored
          title="React - Learning Portal"
        />
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Header));
