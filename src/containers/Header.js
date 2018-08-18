import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Toolbar from 'react-md/lib/Toolbars';
import { logoutUser } from '../store/app/action';
import AccountDropdown from '../components/AccountDropdown';

import '../assets/scss/Header.css';

class Header extends Component {
  renderMenuDrawer() {
    return this.props.isAuthenticated ? (
      <AccountDropdown
        handleLogout={() => this.props.dispatch(logoutUser())}
        name={this.props.userName}
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
  userName: state.user.name,
});

export default withRouter(connect(mapStateToProps)(Header));
